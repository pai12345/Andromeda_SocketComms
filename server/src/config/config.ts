const PORT = process.env.PORT || 8000;

// generate config data
const generateEnv = () => {
  return {
    PORT: PORT
  };
};

export default generateEnv;