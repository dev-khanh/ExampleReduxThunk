export const NucleoIcons = {
  filter: 'filter',
  closecircle: 'closecircle',
  calendar: 'calendar',
  timeClock: 'time-clock',
  map: 'map-big',
  maps: 'map',
  info: 'c-info',
  infos: 'info',
  users: 'users-wm',
  comments: 'b-comment',
  speaks: 'podcast-mic',
  talks: 'megaphone',
  question: 'c-question',
  resource: 'document-copy',
  video: 'film',
  play: 'play',
  arrow_down: 'caret-down',
  arrow_left: 'left-arrow',
  arrow_right: 'right-arrow-1',
  close: 'close',
  wifi: 'wifi',
  search: 'search',
  edit: 'pen-1',
  edit_file: 'edit-file',
  remove: 'e-remove',
  delete: 'trash',
  notes: 'notes',
  notes_1: 'b-notes-1',
  star: 'star',
  starEmpty: 'star-empty',
  favourites: 'heart',
  download: 'cloud-download-93',
  web: 'globe',
  menu: 'menu-2',
  image: 'image-sharp',
  send: 'send',
  double_arrow_right: 'double-arrow-right-1',
  thumbUp: 'thumb-up',
  thumbDown: 'thumb-down',
  positionPin: 'position-pin',
  infoPoint: 'info-point',
  single1: 'single-1',
  checkSquare: 'check-square-o',
  squareo: 'square-o',
  checkCircle: 'check-circle-o',
  circleo: 'circle-o',
  downArrow1: 'down-arrow-1',
  check1: 'check-1',
  listBullet: 'list-bullet',
  paper: 'paper',
  upArrow1: 'up-arrow-1',
  book: 'book',
  tagsStack: 'tags-stack',
  eAdd: 'e-add',
};
export const FontAwesome5Icons = {emoji: 'smile-beam'};

export const FontAwesomeIcons = {
  back: 'angle-left',
  comments: 'comments',
  question_circle: 'question-circle',
  calendar: 'calendar',
  chain: 'chain',
  bookmark: 'bookmark',
  resource: 'file',
  circle: 'circle',
  sign_out: 'sign-out',
};

export const AntDesignIcons = {
  plus: 'pluscircleo',
  face_smile: 'smileo',
};

// https://ionicons.com/
export const IonIcons = {
  info_sharp: 'information-sharp',
  setting_sharp: 'settings-sharp',
  close: 'close-outline',
  close_circle: 'close-circle',
  delete: 'trash-outline',
  check_circle: 'checkmark-circle',
  add_circle: 'add-circle',
  add_circle_outline: 'add-circle-outline',
  remove_circle_outline: 'remove-circle-outline',
  refresh_circle_outline: 'refresh-circle-outline',
  add_members: 'person-add-outline',
  pick_image: 'images-outline',
  pick_video: 'images-outline',
  videocam_outline: 'videocam-outline',
  chevron_down_outline: 'chevron-down-outline',
  edit: 'create-outline',
  information_circle_outline: 'information-circle-outline',
};

export const getIconByName = (name) => {
  switch (name) {
    case 'creditcard':
      return 'card';
    case 'gameplan':
      return 'deep-tech';
    case 'warehouse':
      return 'factory';
    case 'earth':
      return 'global';
    case 'pill':
      return 'drug';
    case 'clapboard':
      return 'movie';
    case 'magicwand':
      return 'enter-title';
    case 'install':
      return 'tool';
    case 'tool':
      return 'tool';
    case 'buildings':
      return 'building';
    case 'connection':
      return 'blockchain';
    case 'mic':
      return 'mic';
    case 'femaleuser':
      return 'female';
    case 'banknote':
      return 'money';
    case 'rocket':
      return 'rocket';
    case 'car':
      return 'car';
    case 'archive':
      return 'box';
    case 'chats':
      return 'panel-list';
    case 'incognito':
      return 'key-note';
    case 'fuel':
      return 'fuel';
    case 'usergroup':
      return 'user-outline';
    case 'ellipsischat':
      return 'chat-1';
    case 'chat':
      return 'chat';
    default:
      return 'enter-title';
  }
};
