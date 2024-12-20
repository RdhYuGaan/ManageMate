import {
  AccountBalance,
  AccountBalanceWallet,
  AddShoppingCart,
  Alarm,
  AllInbox,
  AttachMoney,
  Autorenew,
  Backup,
  BatteryChargingFull,
  BeachAccess,
  Beenhere,
  Block,
  Bluetooth,
  Book,
  Bookmark,
  BugReport,
  Build,
  Cached,
  CalendarToday,
  Call,
  Camera,
  Chat,
  Check,
  Cloud,
  Code,
  Computer,
  Dashboard,
  Delete,
  Directions,
  Done,
  Download,
  Edit,
  Email,
  Event,
  Face,
  Favorite,
  FileCopy,
  Filter,
  Fingerprint,
  FitnessCenter,
  FlashOn,
  Flight,
  Folder,
  Forum,
  Gamepad,
  Gavel,
  GetApp,
  Group,
  Headset,
  Home,            
  Hotel,
  Image,
  Info,
  Keyboard,
  Language,
  Laptop,
  Link,
  List,
  LocalCafe,
  LocalDining,
  Lock,
  Loop,
  Map,
  Memory,
  Message,
  Mic,
  Mood,
  MusicNote,
  Notifications,
  OfflineBolt,
  Pageview,
  Palette,
  PanTool,
  Payment,
  People,
  Pets,
  Photo,
  Power,
  Print,
  Public,
  Radio,
  Restaurant,
  Room,
  Save,
  School,
  Search,
  Security,
  Send,
  Settings,
  Share,
  ShoppingCart,
  SignalCellularAlt,
  Star,
  Store,
  Sync,
  ThumbUp,
  Timer,
  TrendingUp,
  VerifiedUser,
  Visibility,
  VolumeUp,
  Warning,
  Wifi,
  Work,
  ZoomIn,
  ZoomOut,
  ArrowForward,
  ArrowBack,
  Brightness4,
  Brightness5,
  Brush,
  CameraAlt,
  Category,
  CheckCircle,
  CloudQueue,
  Create,
  Crop,
  DirectionsBike,
  DirectionsBus,
  DirectionsCar,
  DirectionsRun,
  DirectionsWalk,
  EmojiEmotions,
  EmojiEvents,
  EmojiFlags,
  EmojiFoodBeverage,
  EmojiNature,
  EmojiObjects,
  EmojiPeople,
  EmojiSymbols,
  EmojiTransportation,
  Equalizer,
  Error,
  Explore,
  Extension,
  FaceRetouchingNatural,
  FactCheck,
  FastForward,
  FavoriteBorder,
  FileDownload,
  FilePresent,
  FilterDrama,
  FilterVintage,
  FingerprintOutlined,
  FireExtinguisher,
  Flag,
  FlashlightOn,
  FlightLand,
  Flip,
  FolderOpen,
  FontDownload,
  Forest,
  FreeBreakfast,
  Functions,
  GTranslate,
  Games,
  GpsFixed,
  GraphicEq,
  GridView,
  GroupWork,
  Handyman,
  HistoryEdu,
  HolidayVillage,
  HomeRepairService,
  House,
  HowToReg,
  HowToVote,
} from '@mui/icons-material';

import {IconData} from "../types/Apptype";
import {useContextApp } from '../contextApp';

export const allIconsArray: IconData[] = [
  { 
    id: 1, 
    icon: <AccountBalance className='text-[23px]' />,
    name: "AccountBalance", 
    isSelected: true
  },
  { 
    id: 2,
    icon: <AccountBalanceWallet className='text-[23px]' />,
    name: "AccountBalanceWallet",
     isSelected: true 
  },
  { id: 3, icon: <AddShoppingCart className='text-[23px]' />, name: "AddShoppingCart", isSelected: true },
  { id: 4, icon: <Alarm className='text-[23px]' />, name: "Alarm", isSelected: true },
  { id: 5, icon: <AllInbox className='text-[23px]' />, name: "AllInbox", isSelected: true },
  { id: 6, icon: <AttachMoney className='text-[23px]' />, name: "AttachMoney", isSelected: true },
  { id: 7, icon: <Autorenew className='text-[23px]' />, name: "Autorenew", isSelected: true },
  { id: 8, icon: <Backup className='text-[23px]' />, name: "Backup", isSelected: true },
  { id: 9, icon: <BatteryChargingFull className='text-[23px]' />, name: "BatteryChargingFull", isSelected: true },
  { id: 10, icon: <BeachAccess className='text-[23px]' />, name: "BeachAccess", isSelected: true },
  { id: 11, icon: <Beenhere className='text-[23px]' />, name: "Beenhere", isSelected: true },
  { id: 12, icon: <Block className='text-[23px]' />, name: "Block", isSelected: true },
  { id: 13, icon: <Bluetooth className='text-[23px]' />, name: "Bluetooth", isSelected: true },
  { id: 14, icon: <Book className='text-[23px]' />, name: "Book", isSelected: true },
  { id: 15, icon: <Bookmark className='text-[23px]' />, name: "Bookmark", isSelected: true },
  { id: 16, icon: <BugReport className='text-[23px]' />, name: "BugReport", isSelected: true },
  { id: 17, icon: <Build className='text-[23px]' />, name: "Build", isSelected: true },
  { id: 18, icon: <Cached className='text-[23px]' />, name: "Cached", isSelected: true },
  { id: 19, icon: <CalendarToday className='text-[23px]' />, name: "CalendarToday", isSelected: true },
  { id: 20, icon: <Call className='text-[23px]' />, name: "Call", isSelected: true },
  { id: 21, icon: <Camera className='text-[23px]' />, name: "Camera", isSelected: true },
  { id: 22, icon: <Chat className='text-[23px]' />, name: "Chat", isSelected: true },
  { id: 23, icon: <Check className='text-[23px]' />, name: "Check", isSelected: true },
  { id: 24, icon: <Cloud className='text-[23px]' />, name: "Cloud", isSelected: true },
  { id: 25, icon: <Code className='text-[23px]' />, name: "Code", isSelected: true },
  { id: 26, icon: <Computer className='text-[23px]' />, name: "Computer", isSelected: true },
  { id: 27, icon: <Dashboard className='text-[23px]' />, name: "Dashboard", isSelected: true },
  { id: 28, icon: <Delete className='text-[23px]' />, name: "Delete", isSelected: true },
  { id: 29, icon: <Directions className='text-[23px]' />, name: "Directions", isSelected: true },
  { id: 30, icon: <Done className='text-[23px]' />, name: "Done", isSelected: true },
  { id: 31, icon: <Download className='text-[23px]' />, name: "Download", isSelected: true },
  { id: 32, icon: <Edit className='text-[23px]' />, name: "Edit", isSelected: true },
  { id: 33, icon: <Email className='text-[23px]' />, name: "Email", isSelected: true },
  { id: 34, icon: <Event className='text-[23px]' />, name: "Event", isSelected: true },
  { id: 35, icon: <Face className='text-[23px]' />, name: "Face", isSelected: true },
  { id: 36, icon: <Favorite className='text-[23px]' />, name: "Favorite", isSelected: true },
  { id: 37, icon: <FileCopy className='text-[23px]' />, name: "FileCopy", isSelected: true },
  { id: 38, icon: <Filter className='text-[23px]' />, name: "Filter", isSelected: true },
  { id: 39, icon: <Fingerprint className='text-[23px]' />, name: "Fingerprint", isSelected: true },
  { id: 40, icon: <FitnessCenter className='text-[23px]' />, name: "FitnessCenter", isSelected: true },
  { id: 41, icon: <FlashOn className='text-[23px]' />, name: "FlashOn", isSelected: true },
  { id: 42, icon: <Flight className='text-[23px]' />, name: "Flight", isSelected: true },
  { id: 43, icon: <Folder className='text-[23px]' />, name: "Folder", isSelected: true },
  { id: 44, icon: <Forum className='text-[23px]' />, name: "Forum", isSelected: true },
  { id: 45, icon: <Gamepad className='text-[23px]' />, name: "Gamepad", isSelected: true },
  { id: 46, icon: <Gavel className='text-[23px]' />, name: "Gavel", isSelected: true },
  { id: 47, icon: <GetApp className='text-[23px]' />, name: "GetApp", isSelected: true },
  { id: 48, icon: <Group className='text-[23px]' />, name: "Group", isSelected: true },
  { id: 49, icon: <Headset className='text-[23px]' />, name: "Headset", isSelected: true },
  { id: 50, icon: <Home className='text-[23px]' />, name: "Home", isSelected: true },
  { id: 51, icon: <Hotel className='text-[23px]' />, name: "Hotel", isSelected: true },
  { id: 52, icon: <Image className='text-[23px]' />, name: "Image", isSelected: true },
  { id: 53, icon: <Info className='text-[23px]' />, name: "Info", isSelected: true },
  { id: 54, icon: <Keyboard className='text-[23px]' />, name: "Keyboard", isSelected: true },
  { id: 55, icon: <Language className='text-[23px]' />, name: "Language", isSelected: true },
  { id: 56, icon: <Laptop className='text-[23px]' />, name: "Laptop", isSelected: true },
  { id: 57, icon: <Link className='text-[23px]' />, name: "Link", isSelected: true },
  { id: 58, icon: <List className='text-[23px]' />, name: "List", isSelected: true },
  { id: 59, icon: <LocalCafe className='text-[23px]' />, name: "LocalCafe", isSelected: true },
  { id: 60, icon: <LocalDining className='text-[23px]' />, name: "LocalDining", isSelected: true },
  { id: 61, icon: <Lock className='text-[23px]' />, name: "Lock", isSelected: true },
  { id: 62, icon: <Loop className='text-[23px]' />, name: "Loop", isSelected: true },
  { id: 63, icon: <Map className='text-[23px]' />, name: "Map", isSelected: true },
  { id: 64, icon: <Memory className='text-[23px]' />, name: "Memory", isSelected: true },
  { id: 65, icon: <Message className='text-[23px]' />, name: "Message", isSelected: true },
  { id: 66, icon: <Mic className='text-[23px]' />, name: "Mic", isSelected: true },
  { id: 67, icon: <Mood className='text-[23px]' />, name: "Mood", isSelected: true },
  { id: 68, icon: <MusicNote className='text-[23px]' />, name: "MusicNote", isSelected: true },
  { id: 69, icon: <Notifications className='text-[23px]' />, name: "Notifications", isSelected: true },
  { id: 70, icon: <OfflineBolt className='text-[23px]' />, name: "OfflineBolt", isSelected: true },
  { id: 71, icon: <Pageview className='text-[23px]' />, name: "Pageview", isSelected: true },
  { id: 72, icon: <Palette className='text-[23px]' />, name: "Palette", isSelected: true },
  { id: 73, icon: <PanTool className='text-[23px]' />, name: "PanTool", isSelected: true },
  { id: 74, icon: <Payment className='text-[23px]' />, name: "Payment", isSelected: true },
  { id: 75, icon: <People className='text-[23px]' />, name: "People", isSelected: true },
  { id: 76, icon: <Pets className='text-[23px]' />, name: "Pets", isSelected: true },
  { id: 77, icon: <Photo className='text-[23px]' />, name: "Photo", isSelected: true },
  { id: 78, icon: <Power className='text-[23px]' />, name: "Power", isSelected: true },
  { id: 79, icon: <Print className='text-[23px]' />, name: "Print", isSelected: true },
  { id: 80, icon: <Public className='text-[23px]' />, name: "Public", isSelected: true },
  { id: 81, icon: <Radio className='text-[23px]' />, name: "Radio", isSelected: true },
  { id: 82, icon: <Restaurant className='text-[23px]' />, name: "Restaurant", isSelected: true },
  { id: 83, icon: <Room className='text-[23px]' />, name: "Room", isSelected: true },
  { id: 84, icon: <Save className='text-[23px]' />, name: "Save", isSelected: true },
  { id: 85, icon: <School className='text-[23px]' />, name: "School", isSelected: true },
  { id: 86, icon: <Search className='text-[23px]' />, name: "Search", isSelected: true },
  { id: 87, icon: <Security className='text-[23px]' />, name: "Security", isSelected: true },
  { id: 88, icon: <Send className='text-[23px]' />, name: "Send", isSelected: true },
  { id: 89, icon: <Settings className='text-[23px]' />, name: "Settings", isSelected: true },
  { id: 90, icon: <Share className='text-[23px]' />, name: "Share", isSelected: true },
  { id: 91, icon: <ShoppingCart className='text-[23px]' />, name: "ShoppingCart", isSelected: true },
  { id: 92, icon: <SignalCellularAlt className='text-[23px]' />, name: "SignalCellularAlt", isSelected: true },
  { id: 93, icon: <Star className='text-[23px]' />, name: "Star", isSelected: true },
  { id: 94, icon: <Store className='text-[23px]' />, name: "Store", isSelected: true },
  { id: 95, icon: <Sync className='text-[23px]' />, name: "Sync", isSelected: true },
  { id: 96, icon: <ThumbUp className='text-[23px]' />, name: "ThumbUp", isSelected: true },
  { id: 97, icon: <Timer className='text-[23px]' />, name: "Timer", isSelected: true },
  { id: 98, icon: <TrendingUp className='text-[23px]' />, name: "TrendingUp", isSelected: true },
  { id: 99, icon: <VerifiedUser className='text-[23px]' />, name: "VerifiedUser", isSelected: true },
  { id: 100, icon: <Visibility className='text-[23px]' />, name: "Visibility", isSelected: true },
  { id: 101, icon: <VolumeUp className='text-[23px]' />, name: "VolumeUp", isSelected: true },
  { id: 102, icon: <Warning className='text-[23px]' />, name: "Warning", isSelected: true },
  { id: 103, icon: <Wifi className='text-[23px]' />, name: "Wifi", isSelected: true },
  { id: 104, icon: <Work className='text-[23px]' />, name: "Work", isSelected: true },
  { id: 105, icon: <ZoomIn className='text-[23px]' />, name: "ZoomIn", isSelected: true },
  { id: 106, icon: <ZoomOut className='text-[23px]' />, name: "ZoomOut", isSelected: true },
  { id: 107, icon: <ArrowForward className='text-[23px]' />, name: "ArrowForward", isSelected: true },
  { id: 108, icon: <ArrowBack className='text-[23px]' />, name: "ArrowBack", isSelected: true },
  { id: 109, icon: <Brightness4 className='text-[23px]' />, name: "Brightness4", isSelected: true },
  { id: 110, icon: <Brightness5 className='text-[23px]' />, name: "Brightness5", isSelected: true },
  { id: 111, icon: <Brush className='text-[23px]' />, name: "Brush", isSelected: true },
  { id: 112, icon: <CameraAlt className='text-[23px]' />, name: "CameraAlt", isSelected: true },
  { id: 113, icon: <Category className='text-[23px]' />, name: "Category", isSelected: true },
  { id: 114, icon: <CheckCircle className='text-[23px]' />, name: "CheckCircle", isSelected: true },
  { id: 115, icon: <CloudQueue className='text-[23px]' />, name: "CloudQueue", isSelected: true },
  { id: 116, icon: <Create className='text-[23px]' />, name: "Create", isSelected: true },
  { id: 117, icon: <Crop className='text-[23px]' />, name: "Crop", isSelected: true },
  { id: 118, icon: <DirectionsBike className='text-[23px]' />, name: "DirectionsBike", isSelected: true },
  { id: 119, icon: <DirectionsBus className='text-[23px]' />, name: "DirectionsBus", isSelected: true },
  { id: 120, icon: <DirectionsCar className='text-[23px]' />, name: "DirectionsCar", isSelected: true },
  { id: 121, icon: <DirectionsRun className='text-[23px]' />, name: "DirectionsRun", isSelected: true },
  { id: 122, icon: <DirectionsWalk className='text-[23px]' />, name: "DirectionsWalk", isSelected: true },
  { id: 123, icon: <EmojiEmotions className='text-[23px]' />, name: "EmojiEmotions", isSelected: true },
  { id: 124, icon: <EmojiEvents className='text-[23px]' />, name: "EmojiEvents", isSelected: true },
  { id: 125, icon: <EmojiFlags className='text-[23px]' />, name: "EmojiFlags", isSelected: true },
  { id: 126, icon: <EmojiFoodBeverage className='text-[23px]' />, name: "EmojiFoodBeverage", isSelected: true },
  { id: 127, icon: <EmojiNature className='text-[23px]' />, name: "EmojiNature", isSelected: true },
  { id: 128, icon: <EmojiObjects className='text-[23px]' />, name: "EmojiObjects", isSelected: true },
  { id: 129, icon: <EmojiPeople className='text-[23px]' />, name: "EmojiPeople", isSelected: true },
  { id: 130, icon: <EmojiSymbols className='text-[23px]' />, name: "EmojiSymbols", isSelected: true },
  { id: 131, icon: <EmojiTransportation className='text-[23px]' />, name: "EmojiTransportation", isSelected: true },
  { id: 132, icon: <Equalizer className='text-[23px]' />, name: "Equalizer", isSelected: true },
  { id: 133, icon: <Error className='text-[23px]' />, name: "Error", isSelected: true },
  { id: 134, icon: <Explore className='text-[23px]' />, name: "Explore", isSelected: true },
  { id: 135, icon: <Extension className='text-[23px]' />, name: "Extension", isSelected: true },
  { id: 136, icon: <FaceRetouchingNatural className='text-[23px]' />, name: "FaceRetouchingNatural", isSelected: true },
  { id: 137, icon: <FactCheck className='text-[23px]' />, name: "FactCheck", isSelected: true },
  { id: 138, icon: <FastForward className='text-[23px]' />, name: "FastForward", isSelected: true },
  { id: 139, icon: <FavoriteBorder className='text-[23px]' />, name: "FavoriteBorder", isSelected: true },
  { id: 140, icon: <FileDownload className='text-[23px]' />, name: "FileDownload", isSelected: true },
  { id: 141, icon: <FilePresent className='text-[23px]' />, name: "FilePresent", isSelected: true },
  { id: 142, icon: <FilterDrama className='text-[23px]' />, name: "FilterDrama", isSelected: true },
  { id: 143, icon: <FilterVintage className='text-[23px]' />, name: "FilterVintage", isSelected: true },
  { id: 144, icon: <FingerprintOutlined className='text-[23px]' />, name: "FingerprintOutlined", isSelected: true },
  { id: 145, icon: <FireExtinguisher className='text-[23px]' />, name: "FireExtinguisher", isSelected: true },
  { id: 146, icon: <Flag className='text-[23px]' />, name: "Flag", isSelected: true },
  { id: 147, icon: <FlashlightOn className='text-[23px]' />, name: "FlashlightOn", isSelected: true },
  { id: 148, icon: <FlightLand className='text-[23px]' />, name: "FlightLand", isSelected: true },
  { id: 149, icon: <Flip className='text-[23px]' />, name: "Flip", isSelected: true },
  { id: 150, icon: <FolderOpen className='text-[23px]' />, name: "FolderOpen", isSelected: true },
  { id: 151, icon: <FontDownload className='text-[23px]' />, name: "FontDownload", isSelected: true },
  { id: 152, icon: <Forest className='text-[23px]' />, name: "Forest", isSelected: true },
  { id: 153, icon: <FreeBreakfast className='text-[23px]' />, name: "FreeBreakfast", isSelected: true },
  { id: 154, icon: <Functions className='text-[23px]' />, name: "Functions", isSelected: true },
  { id: 155, icon: <GTranslate className='text-[23px]' />, name: "GTranslate", isSelected: true },
  { id: 156, icon: <Games className='text-[23px]' />, name: "Games", isSelected: true },
  { id: 157, icon: <GpsFixed className='text-[23px]' />, name: "GpsFixed", isSelected: true },
  { id: 158, icon: <GraphicEq className='text-[23px]' />, name: "GraphicEq", isSelected: true },
  { id: 159, icon: <GridView className='text-[23px]' />, name: "GridView", isSelected: true },
  { id: 160, icon: <GroupWork className='text-[23px]' />, name: "GroupWork", isSelected: true },
  { id: 161, icon: <Handyman className='text-[23px]' />, name: "Handyman", isSelected: true },
  { id: 162, icon: <HistoryEdu className='text-[23px]' />, name: "HistoryEdu", isSelected: true },
  { id: 163, icon: <HolidayVillage className='text-[23px]' />, name: "HolidayVillage", isSelected: true },
  { id: 164, icon: <HomeRepairService className='text-[23px]' />, name: "HomeRepairService", isSelected: true },
  { id: 165, icon: <House className='text-[23px]' />, name: "House", isSelected: true },
  { id: 166, icon: <HowToReg className='text-[23px]' />, name: "HowToReg", isSelected: true },
  { id: 167, icon: <HowToVote className='text-[23px]' />, name: "HowToVote", isSelected: true },
  
];


export default function AllIcons() {
  const {
    allIconsDataObject: { allIconsData, setAllIconsData },
    selectedIconObject: {selectedIcon, setSelectedIcon },
    openIconWindowObject: {setOpenIconWindow },
  } = useContextApp();

  function handleTheIconSelection(singleIcon: IconData) {
    setAllIconsData((prevIcons) =>
      prevIcons.map((icon) => {
        if (icon.name === singleIcon.name) {
          setSelectedIcon(singleIcon);
          return { ...icon, isSelected: true };
        }
        return { ...icon, isSelected: false };
      })
    );

    setOpenIconWindow(false);
  }

  return (
    <div className="flex flex-wrap gap-2 text-orange-600 p-3">
      {allIconsData.map((singleIcon, index) => (
        <div
          key={index}
          onClick={() => handleTheIconSelection(singleIcon)}
          className={`w-9 h-9 shadow-sm border border-slate-600 hover:text-white ${
            singleIcon.isSelected
              ? "bg-orange-600 text-white"
              : "bg-white text-orange-600"
          }`}
        >
          {singleIcon.icon}
        </div>
      ))}
    </div>
  );
}

