import Vue from 'vue'


Vue.component('text-component',                          require('./text-component').default);
Vue.component('video-component',                         require('./video-component').default);
Vue.component('photo-component',                         require('./photo-component').default);
Vue.component('pdf-component',                           require('./pdf-component').default);
Vue.component('slider-component',                        require('./slider-component').default);

Vue.component('bigvideo-component',                      require('./bigvideo-component').default);
Vue.component('bigaudio-component',                      require('./bigaudio-component').default);

Vue.component('svg-wave',                                require('./svg-wave').default);