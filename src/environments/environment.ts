declare const process: any;

export const environment = {
  production: false,
  firebase: {
    apiKey: process.env.youtubeapi,
    authDomain: "shrikrishnacourses.firebaseapp.com",
    projectId: "shrikrishnacourses-6cce7",
    storageBucket: "shrikrishnacourses.appspot.com",
    messagingSenderId: "828511971613",
    appId: "1:828511971613:web:f6a36d630e244bd2ff59f4"
  }
};
