import { Dimensions, Platform, PixelRatio, StatusBar } from 'react-native'

export const COLORS = {
  WHITE: '#FFFFFF', // background
  BLACK: '#000000', // onBackground
  GRAY_TEXT: '#00000080', // onBachground secondary
  // GRAY
  DARK_GRAY: '#242525',
  GRAY: '#AFAFAF',
  LIGHT_GRAY: '#AAAAAA',
  GRAY_2: '#AEAEB2',
  GRAY_3: '#C7C7CC',
  GRAY_4: '#D1D1D6',
  GRAY_5: '#E5E5EA',
  GRAY_6: '#F2F2F7',
  //
  BLUE_SKY: '#0097DC',
  YELLOW: '#e6df59',
  PINK: '#ED017F',
  GREEN: '#28CA42',
  RED: '#EF3E2D',
  BLUE_FB: '#3b5998',
  BLUE_TWITTER: '#1da1f2',
  GAINSBORO: '#dcdcdc',
  ORANGE: '#ff8b3d',
  WHITE_SMOKE: '#fafafa',
  VIVID_CERISE: '#DD2A7B',
  PRINCETON_ORANGE: '#F58529',
  JASMINE: '#FEDA77',
  GRAPE: '#8134AF',
  TRANSPARENT: 'transparent',
  SHADOW: '#000000CC',
  BORDER: '#00000025',
  BACKDROP: '#000000CC',
  DIVIDER: '#e0e0e0',
  PICKER: '#0D6B93',
  GAFIX: '#262727BF',
  ORANGE_TEXT: '#F3871B',
  BLUE_SKYS: '#497AFC',
  PLAY_BLUE: '#0098dc',
  PRIMARY_GRADIENT: ['#B13571', '#843272', '#2D3863'],
  LIGHT_BUTTON: '#FFFFFFB2',
  INPUT_TEXT: '#000',
  INPUT_FILL: '#F9F9FA',
  INPUT_BORDER: '#C9C9CA',
  INPUT_PLACEHOLDER: '#00000080',
  INPUT_GRAY_TEXT: '#FFF',
  INPUT_GRAY_PLACEHOLDER: '#d9d9d9',
  INPUT_GRAY_FILL: '#FFFFFF76',
  ERROR: '#fc0d40',
}

export const HEADER_HEIGHT = 130
export const { height, width } = Dimensions.get('window')

export const IS_IOS = Platform.OS === 'ios'
export const IS_IP_X = Platform.OS === 'ios' && (height === 812 || height === 896)

const ratio = Math.min(PixelRatio.get(), 3)
export const responsiveDistance = (value) => Math.ceil((value / 3) * ratio)
export const COMMON_MARGIN = responsiveDistance(25)
export const TIME_FORMAT = 'Hmm'

export const statusBarHeight = Platform.select({
  ios: IS_IP_X ? 44 : 20,
  android: StatusBar.currentHeight,
  default: 0,
})

export const bottomBarHeight = Platform.select({
  ios: IS_IP_X ? 30 : 0,
  android: 0,
  default: 0,
})

export const LINKS = {
  TERMS_AND_CONDITIONS: 'https://summit.techsauce.co/conduct',
  PRIVACY_POLICY: 'https://www.iubenda.com/privacy-policy/30763623',
  HOME_PAGE: 'https://futureassembly.io',
}

export const EVENT_FEATURES = {
  SCHEDULE_EXPENDED_VIEW: 'schedule_expended_view',
  DISPLAY_LOCAL_TIME_ZONE: 'display_local_time_zone',
}

export const FAVOURITE_TYPES = {
  SESSIONS: 'Sessions',
  TALKS: 'Talks',
  SPEAKERS: 'Speakers',
  NOTES: 'Notes',
  RESOURCES: 'Resources',
  SPONSOR: 'Sponsors',
}

export const FAVOURITE_ACTIONS = {
  LIKE: 'like',
  UNLIKE: 'dislike',
}

export const MODEL_TYPES = {
  SESSION: 'Session',
  TALK: 'Talk',
  SPEAKER: 'Speaker',
  NOTE: 'UserPost',
  RESOURCE: 'ClientUpload',
  SPONSOR: 'Sponsor',
  PARTNER: 'Partner',
  EXHIBITOR: 'Exhibitor',
  USER: 'User',
  LIVE: 'Livestream',
}

export const STATE_TYPES = {
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESSED: 'successed',
}

export const QUESTION_TYPE_ID = {
  TALK: 'talk_id',
  LIVESTREAM: 'livestream_id',
}

export const FIELD_TYPE_DATA = {
  TEXT_FIELD: { value: 'text_field', label: 'Text Field' },
  CHECK_BOX: { value: 'checkbox', label: 'Check Box' },
  MULTIPLE_SELECT: { value: 'multiple_select', label: 'Multiple Select' },
}

export const ADVERTISEMENT_LOCATION = {
  HOME_PAGE: 'home_page_takeover',
  FOOTER: 'footer',
}

export const INDEX_NOT_EXIST = -1
