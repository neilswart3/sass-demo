import axios from 'axios';

const sassCompiler = async (scss: string) => {
  try {
    const res = await axios({
      method: 'post',
      url: '/api/sass',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        scss: scss,
      },
    });

    return res;
  } catch (error) {
    console.log('error:', error);
  }
};

export default sassCompiler;
