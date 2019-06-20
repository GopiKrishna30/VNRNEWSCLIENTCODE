import Vue from 'vue';
import Router from 'vue-router';
import home from './components/home.vue';
import seminar from './components/seminars/seminars.vue';
import testing from './components/testing.vue';
import acm from './components/Student Chapters/acm/acm.vue';
import asme from './components/Student Chapters/asme/asme.vue';
import cea from './components/Student Chapters/cea/cea.vue';
import csi from './components/Student Chapters/csi/csi.vue';
import ieee from './components/Student Chapters/ieee/ieee.vue';
import iei from './components/Student Chapters/iei/iei.vue';
import iete from './components/Student Chapters/iete/iete.vue';
import isoi from './components/Student Chapters/isoi/isoi.vue';
import iste from './components/Student Chapters/iste/iste.vue';
import sae from './components/Student Chapters/sae/sae.vue';
import ae_notice from './components/Notice/ae_notice/ae_notice.vue';
import ce_notice from './components/Notice/ce_notice/ce_notice.vue';
import cse_notice from './components/Notice/cse_notice/cse_notice.vue';
import ece_notice from './components/Notice/ece_notice/ece_notice.vue';
import eee_notice from './components/Notice/eee_notice/eee_notice.vue';
import eie_notice from './components/Notice/eie_notice/eie_notice.vue';
import it_notice from './components/Notice/it_notice/it_notice.vue';
import me_notice from './components/Notice/me_notice/me_notice.vue';
import college_notice from './components/Notice/college_notice/college_notice.vue';
import creative_arts from './components/Clubs/creative_arts/creative_arts.vue';
import crescendo from './components/Clubs/crescendo/crescendo.vue';
import dramatix from './components/Clubs/dramatix/dramatix.vue';
import livewire from './components/Clubs/livewire/livewire.vue';
import nss from './components/Clubs/nss/nss.vue';
import sahitivanam from './components/Clubs/sahitivanam/sahitivanam.vue';
import scintillate from './components/Clubs/scintillate/scintillate.vue';
import stentorian from './components/Clubs/stentorian/stentorian.vue';
import vj_teatro from './components/Clubs/vj_teatro/vj_teatro.vue';
import vnrsf from './components/Clubs/vnrsf/vnrsf.vue';
import login from './components/login/login';
import signup from './components/signup/signup';
import postCreation from './components/postCreation/postCreation.vue'
import Others from './components/Others/Others.vue'
import Sports from './components/Sports/Sports.vue'


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/seminar',
      name: 'seminar',
      component: seminar,
    },
    {
      path: '/testing',
      name: 'testing',
      component: testing,
    },
    {
      path: '/acm',
      name: 'acm',
      component: acm,
    },
    {
      path: '/asme',
      name: 'asme',
      component: asme,
    },
    {
      path: '/cea',
      name: 'cea',
      component: cea,
    },
    {
      path: '/csi',
      name: 'csi',
      component: csi,
    },
    {
      path: '/ieee',
      name: 'ieee',
      component: ieee,
    },
    {
      path: '/iei',
      name: 'iei',
      component: iei,
    },
    {
      path: '/iete',
      name: 'iete',
      component: iete,
    },
    {
      path: '/isoi',
      name: 'isoi',
      component: isoi,
    },
    {
      path: '/iste',
      name: 'iste',
      component: iste,
    },
    {
      path: '/sae',
      name: 'sae',
      component: sae,
    },
    {
      path: '/ae_notice',
      name: 'ae_notice',
      component: ae_notice,
    },
    {
      path: '/ce_notice',
      name: 'ce_notice',
      component: ce_notice,
    },
    {
      path: '/cse_notice',
      name: 'cse_notice',
      component: cse_notice,
    },
    {
      path: '/eee_notice',
      name: 'eee_notice',
      component: eee_notice,
    },
    {
      path: '/ece_notice',
      name: 'ece_notice',
      component: ece_notice,
    },
    {
      path: '/eie_notice',
      name: 'eie_notice',
      component: eie_notice,
    },
    {
      path: '/it_notice',
      name: 'it_notice',
      component: it_notice,
    },
    {
      path: '/me_notice',
      name: 'me_notice',
      component: me_notice,
    },
    {
      path: '/college_notice',
      name: 'college_notice',
      component: college_notice,
    },
    {
      path: '/creative_arts',
      name: 'creative_arts',
      component: creative_arts,
    },
    {
      path: '/crescendo',
      name: 'crescendo',
      component: crescendo,
    },
    {
      path: '/dramatix',
      name: 'dramatix',
      component: dramatix,
    },
    {
      path: '/livewire',
      name: 'livewire',
      component: livewire,
    },
    {
      path: '/nss',
      name: 'nss',
      component: nss,
    },
    {
      path: '/scintillate',
      name: 'scintillate',
      component: scintillate,
    },
    {
      path: '/stentorian',
      name: 'stentorian',
      component: stentorian,
    },
    {
      path: '/sahitivanam',
      name: 'sahitivanam',
      component: sahitivanam,
    },
    {
      path: '/vj_teatro',
      name: 'vj_teatro',
      component: vj_teatro,
    },
    {
      path: '/vnrsf',
      name: 'vnrsf',
      component: vnrsf,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup,
    },
    {
      path: '/postCreation',
      name: 'postCreation',
      component: postCreation,
    },
    {
      path: '/others',
      name: 'Others',
      component: Others,
    },
    {
      path: '/sports',
      name: 'Sports',
      component: Sports,
    },
    
  ],
});
