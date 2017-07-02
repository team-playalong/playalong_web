import PLY_CONFIG from '../env';

const Config = {
  env: PLY_CONFIG.env,
  paths: {
    firebaseDev: 'https://playalong.firebaseio.com/',
    firebaseProd: 'https://playalong-prod.firebaseio.com/',
    firebase: undefined,
    mocks: {
      singleChord: 'mocks/singleChord.json',
      hebrewChord: 'mocks/hebrewChord.json',
    },
  },
};

// This is an addition to the reference in order to create two envs
Config.paths.firebase = Config.env === 'dev' ? Config.paths.firebaseDev : Config.paths.firebaseProd;

export default Config;
