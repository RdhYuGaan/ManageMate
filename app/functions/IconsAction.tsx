import { ClassNames } from '@emotion/react';
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
    ElectricalServicesOutlined,
    DensitySmall,
    Help,
    FastRewind,
    Euro,
  } from '@mui/icons-material';

  export const getIconComponent =(
    iconName: string,
    textColor? : string,
    fontSize? :string
  ): JSX.Element => {
    const defaultFontSize ="27px";
    const defaultTextColor = "text-orange-600";

    const iconProps ={
        sx : {fontSize: fontSize || defaultFontSize},
        ClassNames: `${defaultTextColor} &{textColor || ""}`.trim(),
    };

    switch (iconName) {

        case "ElectricalServicesOutlined":
        return <ElectricalServicesOutlined {...iconProps} />;
    case "DensitySmall":
        return <DensitySmall {...iconProps} />;
    case "AccountBalance":
        return <AccountBalance {...iconProps} />;
    case "AccountBalanceWallet":
        return <AccountBalanceWallet {...iconProps} />;
    case "AddShoppingCart":
        return <AddShoppingCart {...iconProps} />;
    case "Alarm":
        return <Alarm {...iconProps} />;
    case "AllInbox":
        return <AllInbox {...iconProps} />;
    case "AttachMoney":
        return <AttachMoney {...iconProps} />;
    case "Autorenew":
        return <Autorenew {...iconProps} />;
    case "Backup":
        return <Backup {...iconProps} />;
    case "BatteryChargingFull":
        return <BatteryChargingFull {...iconProps} />;
    case "BeachAccess":
        return <BeachAccess {...iconProps} />;
    case "Beenhere":
        return <Beenhere {...iconProps} />;
    case "Block":
        return <Block {...iconProps} />;
    case "Bluetooth":
        return <Bluetooth {...iconProps} />;
    case "Book":
        return <Book {...iconProps} />;
    case "Bookmark":
        return <Bookmark {...iconProps} />;
    case "BugReport":
        return <BugReport {...iconProps} />;
    case "Build":
        return <Build {...iconProps} />;
    case "Cached":
        return <Cached {...iconProps} />;
    case "CalendarToday":
        return <CalendarToday {...iconProps} />;
    case "Call":
        return <Call {...iconProps} />;
    case "Camera":
        return <Camera {...iconProps} />;
    case "Chat":
        return <Chat {...iconProps} />;
    case "Check":
        return <Check {...iconProps} />;
    case "Cloud":
        return <Cloud {...iconProps} />;
    case "Code":
        return <Code {...iconProps} />;
    case "Computer":
        return <Computer {...iconProps} />;
    case "Dashboard":
        return <Dashboard {...iconProps} />;
    case "Delete":
        return <Delete {...iconProps} />;
    case "Directions":
        return <Directions {...iconProps} />;
    case "Done":
        return <Done {...iconProps} />;
    case "Download":
        return <Download {...iconProps} />;
    case "Edit":
        return <Edit {...iconProps} />;
    case "Email":
        return <Email {...iconProps} />;
    case "Event":
        return <Event {...iconProps} />;
    case "Face":
        return <Face {...iconProps} />;
    case "Favorite":
        return <Favorite {...iconProps} />;
    case "FileCopy":
        return <FileCopy {...iconProps} />;
    case "Filter":
        return <Filter {...iconProps} />;
    case "Fingerprint":
        return <Fingerprint {...iconProps} />;
    case "FitnessCenter":
        return <FitnessCenter {...iconProps} />;
    case "FlashOn":
        return <FlashOn {...iconProps} />;
    case "Flight":
        return <Flight {...iconProps} />;
    case "Folder":
        return <Folder {...iconProps} />;
    case "Forum":
        return <Forum {...iconProps} />;
    case "Gamepad":
        return <Gamepad {...iconProps} />;
    case "Gavel":
        return <Gavel {...iconProps} />;
    case "GetApp":
        return <GetApp {...iconProps} />;
    case "Group":
        return <Group {...iconProps} />;
    case "Headset":
        return <Headset {...iconProps} />;
    case "Home":
        return <Home {...iconProps} />;
    case "Hotel":
        return <Hotel {...iconProps} />;
    case "Image":
        return <Image {...iconProps} />;
    case "Info":
        return <Info {...iconProps} />;
    case "Keyboard":
        return <Keyboard {...iconProps} />;
    case "Language":
        return <Language {...iconProps} />;
    case "Laptop":
        return <Laptop {...iconProps} />;
    case "Link":
        return <Link {...iconProps} />;
    case "List":
        return <List {...iconProps} />;
    case "LocalCafe":
        return <LocalCafe {...iconProps} />;
    case "LocalDining":
        return <LocalDining {...iconProps} />;
    case "Lock":
        return <Lock {...iconProps} />;
    case "Loop":
        return <Loop {...iconProps} />;
    case "Map":
        return <Map {...iconProps} />;
    case "Memory":
        return <Memory {...iconProps} />;
    case "Message":
        return <Message {...iconProps} />;
    case "Mic":
        return <Mic {...iconProps} />;
    case "Mood":
        return <Mood {...iconProps} />;
    case "MusicNote":
        return <MusicNote {...iconProps} />;
    case "Notifications":
        return <Notifications {...iconProps} />;
    case "OfflineBolt":
        return <OfflineBolt {...iconProps} />;
    case "Pageview":
        return <Pageview {...iconProps} />;
    case "Palette":
        return <Palette {...iconProps} />;
    case "PanTool":
        return <PanTool {...iconProps} />;
    case "Payment":
        return <Payment {...iconProps} />;
    case "People":
        return <People {...iconProps} />;
    case "Pets":
        return <Pets {...iconProps} />;
    case "Photo":
        return <Photo {...iconProps} />;
    case "Power":
        return <Power {...iconProps} />;
    case "Print":
        return <Print {...iconProps} />;
    case "Public":
        return <Public {...iconProps} />;
    case "Radio":
        return <Radio {...iconProps} />;
    case "Restaurant":
        return <Restaurant {...iconProps} />;
    case "Room":
        return <Room {...iconProps} />;
    case "Save":
        return <Save {...iconProps} />;
    case "School":
        return <School {...iconProps} />;
    case "Search":
        return <Search {...iconProps} />;
    case "Security":
        return <Security {...iconProps} />;
    case "Send":
        return <Send {...iconProps} />;
    case "Settings":
        return <Settings {...iconProps} />;
    case "Share":
        return <Share {...iconProps} />;
    case "ShoppingCart":
        return <ShoppingCart {...iconProps} />;
    case "SignalCellularAlt":
        return <SignalCellularAlt {...iconProps} />;
    case "Star":
        return <Star {...iconProps} />;
    case "Store":
        return <Store {...iconProps} />;
    case "Sync":
        return <Sync {...iconProps} />;
    case "ThumbUp":
        return <ThumbUp {...iconProps} />;
    case "Timer":
        return <Timer {...iconProps} />;
    case "TrendingUp":
        return <TrendingUp {...iconProps} />;
    case "VerifiedUser":
        return <VerifiedUser {...iconProps} />;
    case "Visibility":
        return <Visibility {...iconProps} />;
    case "VolumeUp":
        return <VolumeUp {...iconProps} />;
    case "Warning":
        return <Warning {...iconProps} />;
    case "Wifi":
        return <Wifi {...iconProps} />;
    case "Work":
        return <Work {...iconProps} />;
    case "ZoomIn":
        return <ZoomIn {...iconProps} />;
    case "ZoomOut":
        return <ZoomOut {...iconProps} />;
    case "ArrowForward":
        return <ArrowForward {...iconProps} />;
    case "ArrowBack":
        return <ArrowBack {...iconProps} />;
    case "Brightness4":
        return <Brightness4 {...iconProps} />;
    case "Brightness5":
        return <Brightness5 {...iconProps} />;
    case "Brush":
        return <Brush {...iconProps} />;
    case "CameraAlt":
        return <CameraAlt {...iconProps} />;
    case "Category":
        return <Category {...iconProps} />;
    case "CheckCircle":
        return <CheckCircle {...iconProps} />;
    case "CloudQueue":
        return <CloudQueue {...iconProps} />;
    case "Create":
        return <Create {...iconProps} />;
    case "Crop":
        return <Crop {...iconProps} />;
    case "DirectionsBike":
        return <DirectionsBike {...iconProps} />;
    case "DirectionsBus":
        return <DirectionsBus {...iconProps} />;
    case "DirectionsCar":
        return <DirectionsCar {...iconProps} />;
    case "DirectionsRun":
        return <DirectionsRun {...iconProps} />;
    case "DirectionsWalk":
        return <DirectionsWalk {...iconProps} />;
    case "EmojiEmotions":
        return <EmojiEmotions {...iconProps} />;
    case "EmojiEvents":
        return <EmojiEvents {...iconProps} />;
    case "EmojiFlags":
        return <EmojiFlags {...iconProps} />;
    case "EmojiFoodBeverage":
        return <EmojiFoodBeverage {...iconProps} />;
    case "EmojiNature":
        return <EmojiNature {...iconProps} />;
    case "EmojiObjects":
        return <EmojiObjects {...iconProps} />;
    case "EmojiPeople":
        return <EmojiPeople {...iconProps} />;
    case "EmojiSymbols":
        return <EmojiSymbols {...iconProps} />;
    case "EmojiTransportation":
        return <EmojiTransportation {...iconProps} />;
    case "Equalizer":
        return <Equalizer {...iconProps} />;
    case "Euro":
        return <Euro {...iconProps} />;
    case "Explore":
        return <Explore {...iconProps} />;
    case "Extension":
        return <Extension {...iconProps} />;
    case "FaceRetouchingNatural":
        return <FaceRetouchingNatural {...iconProps} />;
    case "FastForward":
        return <FastForward {...iconProps} />;
    case "FastRewind":
        return <FastRewind {...iconProps} />;
    default:
        console.warn(`icon "${iconName}" not fount in MUI icons`);
        return <Help {...iconProps} />;
    }


};