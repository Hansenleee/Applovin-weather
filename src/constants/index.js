// 天气图标
export const WEATHER_TYPE_IMG = {
  '晴': [
    'http://leebucket01.oss-cn-shanghai.aliyuncs.com/Statics/temporary/Day%20Sun.png',
    'http://leebucket01.oss-cn-shanghai.aliyuncs.com/Statics/temporary/Night%20Moon.png'
  ],
  '阴': [
    'http://leebucket01.oss-cn-shanghai.aliyuncs.com/Statics/temporary/Day%20Clouds.png',
    'http://leebucket01.oss-cn-shanghai.aliyuncs.com/Statics/temporary/Night%20Clouds.png'
  ],
  '大风': [
    'http://leebucket01.oss-cn-shanghai.aliyuncs.com/Statics/temporary/Night%20Clouds.png',
    'http://leebucket01.oss-cn-shanghai.aliyuncs.com/Statics/temporary/Night%20Wind.png'
  ],
  '雨天': [
    'http://leebucket01.oss-cn-shanghai.aliyuncs.com/Statics/temporary/Day%20Rain.png',
    'http://leebucket01.oss-cn-shanghai.aliyuncs.com/Statics/temporary/Night%20Rain.png'
  ],
  '雪天': [
    'http://leebucket01.oss-cn-shanghai.aliyuncs.com/Statics/temporary/Day%20Snow.png',
    'http://leebucket01.oss-cn-shanghai.aliyuncs.com/Statics/temporary/Night%20Snow.png'
  ],
  '打雷': [
    'http://leebucket01.oss-cn-shanghai.aliyuncs.com/Statics/temporary/Day%20Storm.png',
    'http://leebucket01.oss-cn-shanghai.aliyuncs.com/Statics/temporary/Night%20Storm.png'
  ],
};

WEATHER_TYPE_IMG['多云'] = WEATHER_TYPE_IMG['阴'];
WEATHER_TYPE_IMG['小雨'] = WEATHER_TYPE_IMG['雨天'];

// 降水量
export const IMG_RAIN = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAIEAQv+/fUM+QcDCfgGB/X6DlOCncAAAAiklEQVQoz72QSw7DIAxEDQYMoaHp3P+wdShS+Ki7KLPwIA342dBjsi9TPb+nICHI6TuCGQIHeP554ClAbj482YDUPI4Qbves/T/aqg1Oa1lTWzne5x5xHQN6TLnamzzu4UUtLv09AFYI5r+CytKuVcgcXfA5N67BQYLUj1pYuQGOdZ1IiypcmO7VFzVnBNnimKaQAAAAAElFTkSuQmCC';
export const IMG_RAIN_COLORFUL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG+SURBVHgB7VTNTsJAEJ7ZakL0wiP0osaT9QmEJxCfQIwUOYLBs3IyUWn1ZhQDPoH6BPAG4AnBAzyCF7lId9wtP6mwpUUPXviSprsz7X4z38wOwAL/DVQZU3Yzhlzb15hTuM1tdif9pt02kHD37nitAAFgKiMRJgAp6RCrHl61ElN+7iQI+JlptToZu6nDvASM2NZwqTMG5aRdj3r9CNrOyC+DmPQHEkwgugyr+gy/HoHIfAQi/RfP7uY+t97w90NDVadAZEXamXN/fVOXzZh8IAAIIRHUWX4IU4MBOBpuZ3Gt7DWbxWZyVifNQUCDOiB//WFHZotOqpsXbUP125LKKPW/zm1/eG2lk80aqCWV3+mEjrKTlBl88kjCLLbLQZdIQkMehz5uDwOYgrLI4vCq0Dsmo+McDh7yG89jn9Wqi0P3whZaXQOkkZ5RcZOfRjdVdpJ4GULzTtp6P4VfE4iDvZulfmRAyCE2sslZdGS97cq1lDJttfZDExCHR8+24acvAbqBfDnMIIBKuti2QxGU8htJcnjcIX6wir34OBMGFfHquocT1Vaw544MRNJd26Buf4dqhMixnp0xVRfwxTf2cLXPSX5KqgAAAABJRU5ErkJggg==';

// 湿度
export const IMG_HUMIDITY = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAKlBMVEUAAAD///////////////////////////////////////////////////+Gu8ovAAAADXRSTlMAYJ/vgN9AUCAQz68wvJxnMwAAAD9JREFUGNNjIAGwX0HiMF6iIYcTmcPViMSRdUDiNKXBOSy3GUTgnOK7AggDYu8aIDi2dwMQnNTLSMoYTjKQAgDMqxL+7YwecQAAAABJRU5ErkJggg==';
export const IMG_HUMIDITY_COLORFUL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADZSURBVHgB7ZXNDcIwDIUdiwu3btDegFtH6AgwAekEwAYwQWCClgkYATbggkDcOgITNDiiBSEh2SnqLZ+UupFe/PKjOAABBiURXbWZosKDtfVmUq7W4AFKRDSL6BVVDJ6IDP4hGASD35y1iaTaTgZDhcebNsk93805rbcBJdYUUmp6VCz2nL7LCk5gbekimWWcWGSAOIibn4hqUTUulzn1EmoZN5Ytdq7QKYXFpx7JtuY9OVag0LTJG7bgAWtgv5O7/gM84M/A1jP6Vm1y9yZAH1y0SX0uWEDME+g/M4g4ty3KAAAAAElFTkSuQmCC';

// 风
export const IMG_WIND = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAv99gIJ+AEO9AMM+QcK9Q9gQw1AAAAINJREFUKM+1z0sOwyAMBNDBYH6Bdu5/2loKJUi0qzZvwwJ5xsYNQiYlYpcOEVK/TAkLPor0SDVgoyxBrjwfB0eBo00NmW8SIDxmVPWDNfde8QN1puPhTjo7hKYlWVZYzJNTpMOiXRE5Y1FJSefI/JhNFamUp6NiFdROVhp7N1W1efzZC7GuBQ/2pq6WAAAAAElFTkSuQmCC';
export const IMG_WIND_COLORFUL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIGSURBVHgB7VTLbtNAFD13bPEQSA3iA2q6ZtGyR7G7hmAWbJCSuPwA4QvqfAGPL0hTdkiQVKxrUvbUSKxYtIZtN5EKUqXGc7nOA8VO5LjtruqRkvHMfZ+5c4ErnAFURKle2XvNxI3JnoHAIP2i1XGiIvaqiJJW8S9xHY1+6Etmjmb17bkbrBaxL1RJFjU38MFqM6lou1teX6RfqJJZoxvNZJUMrWT1/QCeG1jeo8Cer38unFjJPwt9nruPg9D0hb5DbajdJFhWO0VXoqA1vDz3GqqkCHX5XBLrDQX9WwLsjsWH7W55JWtjTm9iwCVSm8jB/9JZN29fw9bxCTZodMhM+t08m1QQA2gNSEcUo4QcGAY61prdj8LeHShV0RQ74iiUlu7jUiN78XbMs3cir/vpYACbDPUSec4YrfZOeSt7nr14S6LaGZ2E5xKZIuMZWTblcq3y1WrvPGymjxdg0vd5c8p/9gM/T4/WTFYfZbusY73+/rPzZSIvNrtYfao+6QW1Sq8+N8iH+7h76+b+pIWJkJppC4MkFTAoGtJIaFUfB415esd/r4O0uTTe8rTMRBFQ3JWB6I6ztGV5k1AUnR6tYjB6U1r/KUuUYWPIO+qmzFEQVTfwwFQn5u8rD9CIQtwTGg+mVIbZC2WvtjvO23MFyUIaQrKHz0TLQ99EocyxPaE3xBUugn8Ohb0Q1rAqbwAAAABJRU5ErkJggg==';

// 返回图标
export const IMG_BACK = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBrZSxUcNAEEX/rjwDoUs4iBR6cAO4A1QBdIJLgApwB6YDFUCiiGGG5EpwSCJ9dmVbjC08c7L1ktNd8Gb3tP8EJ5jlIShlLYKp1iw+vmOFBCanZBmkhCD4vs7wYEuSUHuyEKYTq8w+g+8JxAZYIRHpya6kpGD2J+Oi+ooRiRy0nF3L2iRny5yu5bv89s2W+1Ym2DTKYqjMkb1MwKdOJlbZZ9pf7QlN9myyJUaAkKXM8xtiRBTkK8aCfGnvcJ6HlXX/uD3ERhsuUpNxTDeHY0kPBtvus8RudIxYXzKHTv3Dguwy2+bZc40ByPGBx08tfrKL39BKe49DFaMPduHR21eqbF+bJPS/Q6/Gc+zSbXLwjkR+AVmYgGC0Y8sWAAAAAElFTkSuQmCC';

// 数字映射
export const NUMS_CHN_MAP = ['', '一', '二', '三', '四', '五', '六', '日'];