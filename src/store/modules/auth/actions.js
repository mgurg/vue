export default {
    mgu_logout(context){
        context.commit('mgu_logout');
    },
  async mgu_login(context, payload) {
    // console.log(payload);
    const response = await fetch(
      // 'https://api.imion.eu/auth/login?' +
      //   new URLSearchParams({
      //     email: payload.user,
      //     password: payload.password,
      //   }),
      'https://api.imion.eu/auth/login',
      {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        mode: 'cors',
        body: JSON.stringify({
          email: payload.user,
          password: payload.password,
        }),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.log('Login NOK');
      console.log(responseData);
      const error = new Error(responseData.message || 'Fail');
      throw error;
    }

    console.log('Login OK');
    console.log(responseData);
    context.commit('setUser', {
      token: responseData.token,
    });
  },
  async mgu_signup(context, payload) {
    const response = await fetch('https://imion.eu/idd/register', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
      }),
    });
    const responseData = await response.json();

    if (!response.ok) {
      console.log('Register NOK');
      console.log(responseData);
      const error = new Error(responseData.message || 'Fail');
      throw error;
    }

    console.log('Register OK');
    console.log(responseData);
    context.commit('setUser', {
      token: responseData.token,
    });
  },
};
