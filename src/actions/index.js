export const userStatus = {
  SIGN_IN: "signIn",
  SIGN_UP: "signUp",
  SIGNED_IN: "signedIn"
};

export const userSignedIn = user => ({
  type: userStatus.SIGNED_IN,
  user
});

export const userSignedOut = () => ({
  type: userStatus.SIGN_IN
});
