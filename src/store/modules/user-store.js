export const namespaced = true;

export const state = {
  user: {id: '123ab', name: 'Annie Wilkens'},
};

export const actions ={
  log() {
    console.log(state.user);
  },
};
