<template>
  <section class="section">
    <div class="container">
      <p>QR</p>
      <p class="error">{{ error }}</p>

      <p class="decode-result">
        Last result: <b>{{ result }}</b>
      </p>

      <qrcode-stream @decode="onDecode" @init="onInit"/>

      <p>
        Let us locate you for better results...
        <button @click="locateMe">Get location</button>
      </p>

      <div v-if="errorStr">Sorry, but the following error occurred: {{ errorStr }}</div>

      <div v-if="gettingLocation">
        <i>Getting your location...</i>
      </div>

      <div v-if="location">Your location data is {{ location.coords.latitude }}, {{ location.coords.longitude }}</div>
    </div>
  </section>
</template>

<script>
import {QrcodeStream} from 'vue-qrcode-reader';

export default {
  components: {QrcodeStream},

  data() {
    return {
      result: '',
      error: '',
      location: null,
      gettingLocation: false,
      errorStr: null,
    };
  },

  methods: {
    onDecode(result) {
      this.result = result;
    },

    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = 'ERROR: you need to grant camera access permission';
        } else if (error.name === 'NotFoundError') {
          this.error = 'ERROR: no camera on this device';
        } else if (error.name === 'NotSupportedError') {
          this.error = 'ERROR: secure context required (HTTPS, localhost)';
        } else if (error.name === 'NotReadableError') {
          this.error = 'ERROR: is the camera already in use?';
        } else if (error.name === 'OverconstrainedError') {
          this.error = 'ERROR: installed cameras are not suitable';
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = 'ERROR: Stream API is not supported in this browser';
        } else if (error.name === 'InsecureContextError') {
          this.error =
              'ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.';
        } else {
          this.error = `ERROR: Camera error (${error.name})`;
        }
      }
    },

    async getLocation() {
      return new Promise((resolve, reject) => {
        if (!('geolocation' in navigator)) {
          reject(new Error('Geolocation is not available.'));
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
              resolve(pos);
            },
            (err) => {
              reject(err);
            }
        );
      });
    },
    async locateMe() {
      this.gettingLocation = true;
      try {
        this.gettingLocation = false;
        this.location = await this.getLocation();
      } catch (e) {
        this.gettingLocation = false;
        this.errorStr = e.message;
      }
    },
  },
};
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}
</style>
