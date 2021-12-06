import React from "react";
import Product from "../index";
import ReactDOM from "react-dom";

import '../index.css'

import AmazonPage from './amazonPage'
import HomePage from './homepage'

let eBay = require("ebay-node-api");
let ebayApi = new eBay({
    clientID: "KeshavRa-Juxtapos-PRD-4e90acf8a-544792ef"
});

let ebayData = [{
    title: 'HP - 17.3" Laptop - Intel Core i3 - 8GB Memory - 256GB SSD - Natural Silver',
    imageUrl: 'https://i.ebayimg.com/00/s/MTAzMlgxNjAw/z/xcIAAOSwtHphlzZf/$_1.JPG',
    price: '549.99',
    productUrl: 'https://www.ebay.com/itm/HP-17-3-Laptop-Intel-Core-i3-8GB-Memory-256GB-SSD-Natural-Silver-/324893183886'
} ,
    {
        title: 'HP Chromebook 14 G4 14" Intel 2.16 GHz 4GB RAM 16GB SSD Webcam HDMI With Charger',
        imageUrl: 'https://i.ebayimg.com/00/s/MTIyNlgxNTk5/z/RJkAAOSw63Rg8axl/$_1.JPG',
        price: '60.63',
        productUrl: 'https://www.ebay.com/itm/HP-Chromebook-14-G4-14-Intel-2-16-GHz-4GB-RAM-16GB-SSD-Webcam-HDMI-Charger-/324716940631'
    } ,
    {
        title: 'Dell - Inspiron 7000 2-in-1 14" Touch-Screen Laptop - AMD Ryzen 5 - 8GB Memor...',
        imageUrl: 'https://i.ebayimg.com/00/s/ODczWDE1Mjg=/z/rgwAAOSwxElhO544/$_1.JPG',
        price: '799.99',
        productUrl: 'https://www.ebay.com/itm/Dell-Inspiron-7000-2-in-1-14-Touch-Screen-Laptop-AMD-Ryzen-5-8GB-Memor-/324861940790'
    } ,
    {
        title: 'Acer Aspire 1 - 15.6" Laptop Intel Celeron N4500 1.1GHz 4GB RAM 64GB Flash W10H',
        imageUrl: 'https://i.ebayimg.com/00/s/ODUxWDEyMDA=/z/-38AAOSwNfBg~vgG/$_1.JPG',
        price: '199.99',
        productUrl: 'https://www.ebay.com/itm/Acer-Aspire-1-15-6-Laptop-Intel-Celeron-N4500-1-1GHz-4GB-RAM-64GB-Flash-W10H-/274881094568'
    } ,
    {
        title: 'Lenovo Flex 3 MTK 2in1 11.6" Touch Chromebook MT8173C/4GB/32GB eMMC Gray',
        imageUrl: 'https://i.ebayimg.com/00/s/NjEyWDYxMg==/z/LhYAAOSwDE1hgZ68/$_1.JPG',
        price: '129.0',
        productUrl: 'https://www.ebay.com/itm/Lenovo-Flex-3-MTK-2in1-11-6-Touch-Chromebook-MT8173C-4GB-32GB-eMMC-Gray-/115076853100'
    } ,
    {
        title: 'ASUS - ROG Zephyrus 14" Gaming Laptop - AMD Ryzen 9 - 16GB Memory - NVIDIA Ge...',
        imageUrl: 'https://i.ebayimg.com/00/s/MTA1NVgxNjAw/z/j7EAAOSw8ItgWMFK/$_1.JPG',
        price: '1549.99',
        productUrl: 'https://www.ebay.com/itm/ASUS-ROG-Zephyrus-14-Gaming-Laptop-AMD-Ryzen-9-16GB-Memory-NVIDIA-Ge-/203341962115'
    } ,
    {
        title: 'Dell Inspiron 7501 15.6" FHD Laptop - Intel Core i5 - 8GB Memory - 256GB Soli...',
        imageUrl: 'https://i.ebayimg.com/00/s/OTEzWDE2MDA=/z/WfYAAOSwnXBhlzZq/$_1.JPG',
        price: '599.99',
        productUrl: 'https://www.ebay.com/itm/Dell-Inspiron-7501-15-6-FHD-Laptop-Intel-Core-i5-8GB-Memory-256GB-Soli-/194512401481'
    } ,
    {
        title: 'Dell Chromebook 3120 11.6" Touchscreen N2840 2.16GHz 4GB RAM 16GB SSD Laptop',
        imageUrl: 'https://i.ebayimg.com/00/s/MTIwMFgxNTAw/z/9NwAAOSwSpVhfVrP/$_1.JPG',
        price: '52.5',
        productUrl: 'https://www.ebay.com/itm/Dell-Chromebook-3120-11-6-Touchscreen-N2840-2-16GHz-4GB-RAM-16GB-SSD-Laptop-/115128452309'
    } ,
    {
        title: 'Lenovo ThinkPad T460 14" Laptop Core i7-6600U 6th 2.60GHz  WebCam Backlit HDMI',
        imageUrl: 'https://i.ebayimg.com/thumbs/images/g/e30AAOSwfxRgwVM9/s-l140.jpg',
        price: '265.0',
        productUrl: 'https://www.ebay.com/itm/Lenovo-ThinkPad-T460-14-Laptop-Core-i7-6600U-6th-2-60GHz-WebCam-Backlit-HDMI-/165047074612?var=464593415862'
    } ,
    {
        title: 'NEW HP Laptop 15.6” Intel Core i3 256GB SSD 8GB RAM Win 10 Home',
        imageUrl: 'https://i.ebayimg.com/00/s/MTE0MlgxNjAw/z/oT8AAOSwELVhlBuj/$_1.JPG',
        price: '408.99',
        productUrl: 'https://www.ebay.com/itm/NEW-HP-Laptop-15-6-Intel-Core-i3-256GB-SSD-8GB-RAM-Win-10-Home-/283903736508'
    } ,
    {
        title: 'Lenovo Chromebook N22 Laptop Intel Dual-core 1.60 4 Memory Bluetooth Webcam HDMI',
        imageUrl: 'https://i.ebayimg.com/00/s/MTI3M1gxNjAw/z/o3kAAOSwYthhjNsz/$_1.JPG',
        price: '124.99',
        productUrl: 'https://www.ebay.com/itm/Lenovo-Chromebook-N22-Laptop-Intel-Dual-core-1-60-4-Memory-Bluetooth-Webcam-HDMI-/403289703117?var=0'
    } ,
    {
        title: 'Lenovo T450 - Core i5 @ 2.3GHz - 8GB RAM - 128GB SSD - Cellular - Windows 10 Pro',
        imageUrl: 'https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/mSwAAOSwiYJfB4HO/$_1.JPG',
        price: '199.0',
        productUrl: 'https://www.ebay.com/itm/Lenovo-T450-Core-i5-2-3GHz-8GB-RAM-128GB-SSD-Cellular-Windows-10-Pro-/114296068389'
    } ,
    {
        title: 'HP Windows 10 Pro business laptop Core i5 8GB 320GB DVDRW WiFi Firewire Webcam',
        imageUrl: 'https://i.ebayimg.com/00/s/MTUwMFgxNTAw/z/L14AAOSwOiRhqmCo/$_1.JPG',
        price: '169.0',
        productUrl: 'https://www.ebay.com/itm/HP-Windows-10-Pro-business-laptop-Core-i5-8GB-320GB-DVDRW-WiFi-Firewire-Webcam-/233661439249'
    } ,
    {
        title: 'Dell - Inspiron 7000 2-in-1 13.3" FHD Touch-Screen Laptop - Intel Core i5 - 8...',
        imageUrl: 'https://i.ebayimg.com/00/s/OTE1WDE2MDA=/z/WZkAAOSw~rFgAdL0/$_1.JPG',
        price: '649.99',
        productUrl: 'https://www.ebay.com/itm/Dell-Inspiron-7000-2-in-1-13-3-FHD-Touch-Screen-Laptop-Intel-Core-i5-8-/324685865408'
    } ,
    {
        title: 'Kano PC Education Edition',
        imageUrl: 'https://i.ebayimg.com/00/s/ODc2WDEzMTY=/z/DggAAOSwzzdggxc2/$_1.JPG',
        price: '99.99',
        productUrl: 'https://www.ebay.com/itm/Kano-PC-Education-Edition-/284195670363'
    } ,
    {
        title: 'Acer Chromebook 315 15.6" Celeron N4000 4GB Ram 32GB eMMC Chrome OS',
        imageUrl: 'https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/nZQAAOSwOMlhOhcB/$_1.JPG',
        price: '149.99',
        productUrl: 'https://www.ebay.com/itm/Acer-Chromebook-315-15-6-Celeron-N4000-4GB-Ram-32GB-eMMC-Chrome-OS-/264772179145'
    } ,
    {
        title: 'HP - Pavilion x360 2-in-1 14" Touch-Screen Laptop - Intel Core i3 - 8GB Memor...',
        imageUrl: 'https://i.ebayimg.com/00/s/MTIzMFgxNjAw/z/DpQAAOSwT6NhafQ~/$_1.JPG',
        price: '589.99',
        productUrl: 'https://www.ebay.com/itm/HP-Pavilion-x360-2-in-1-14-Touch-Screen-Laptop-Intel-Core-i3-8GB-Memor-/324833641930'
    } ,
    {
        title: 'Dell Latitude E5420 14" Laptop Intel Core i3 2.3GHz 4GB - 250GB HDD Windows 10',
        imageUrl: 'https://i.ebayimg.com/00/s/MTE2MVgxNDIz/z/XbEAAOSwa8Nejg6a/$_1.JPG',
        price: '108.0',
        productUrl: 'https://www.ebay.com/itm/Dell-Latitude-E5420-14-Laptop-Intel-Core-i3-2-3GHz-4GB-250GB-HDD-Windows-10-/324129913689'
    } ,
    {
        title: 'NEW HP Stream 14" HD Intel N4000 4GB RAM 64GB eMMC Webcam BT Win 10',
        imageUrl: 'https://i.ebayimg.com/00/s/MTE0MlgxNjAw/z/I~8AAOSw9wJhmBKW/$_1.JPG',
        price: '274.99',
        productUrl: 'https://www.ebay.com/itm/NEW-HP-Stream-14-HD-Intel-N4000-4GB-RAM-64GB-eMMC-Webcam-BT-Win-10-/293606775830?var=0'
    } ,
    {
        title: 'HP 14 Series Touchscreen Laptop Intel Celeron 4GB RAM 64 GB eMMC Pale Rose Gold',
        imageUrl: 'https://i.ebayimg.com/00/s/MTQ0NFgxNTAw/z/-IYAAOSwxCVhafd3/$_1.JPG',
        price: '249.99',
        productUrl: 'https://www.ebay.com/itm/HP-14-Series-Touchscreen-Laptop-Intel-Celeron-4GB-RAM-64-GB-eMMC-Pale-Rose-Gold-/124940137613'
    } ,
    {
        title: 'Dell Laptop i5 Computer Latitude Windows 10 Pro PC 2.5GHz 8GB 500GB HD HDMI WIFI',
        imageUrl: 'https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/nucAAOSwMm5gnEi8/$_1.JPG',
        price: '254.99',
        productUrl: 'https://www.ebay.com/itm/Dell-Laptop-i5-Computer-Latitude-Windows-10-Pro-PC-2-5GHz-8GB-500GB-HD-HDMI-WIFI-/263602050669'
    } ,
    {
        title: 'Dell Chromebook 11 P22t 11.6 Intel Celeron 2.16GHz 4GB RAM 32GBSSD touch screen',
        imageUrl: 'https://i.ebayimg.com/00/s/MTAyNFg3Njg=/z/zfYAAOSwfAxhhXDX/$_1.JPG',
        price: '70.0',
        productUrl: 'https://www.ebay.com/itm/Dell-Chromebook-11-P22t-11-6-Intel-Celeron-2-16GHz-4GB-RAM-32GBSSD-touch-screen-/124933785052'
    } ,
    {
        title: 'NEW Gateway 2-in-1 11.6” Touchscreen Intel 64GB 4GB Windows 10 + 1Year MS Office',
        imageUrl: 'https://i.ebayimg.com/00/s/MTA0MFgxNDU2/z/BncAAOSwmBdhpXFl/$_1.JPG',
        price: '199.99',
        productUrl: 'https://www.ebay.com/itm/NEW-Gateway-2-in-1-11-6-Touchscreen-Intel-64GB-4GB-Windows-10-1Year-MS-Office-/293816403415?var=0'
    } ,
    {
        title: 'Dell Chromebook 11 3189 11.6" 2in1 Touchscreen Intel 1.6GHz 4GB 32GB SSD Laptop',
        imageUrl: 'https://i.ebayimg.com/00/s/MTYwMFgxMjAw/z/9tMAAOSw4YZhfy2V/$_1.JPG',
        price: '69.99',
        productUrl: 'https://www.ebay.com/itm/Dell-Chromebook-11-3189-11-6-2in1-Touchscreen-Intel-1-6GHz-4GB-32GB-SSD-Laptop-/175002748250'
    } ,
    {
        title: 'ASUS - 11.6" Chromebook - Intel Celeron - 4GB Memory - 32GB eMMC Flash Memory...',
        imageUrl: 'https://i.ebayimg.com/00/s/OTY2WDE0NDg=/z/OwQAAOSwIHhgdzdQ/$_1.JPG',
        price: '219.0',
        productUrl: 'https://www.ebay.com/itm/ASUS-11-6-Chromebook-Intel-Celeron-4GB-Memory-32GB-eMMC-Flash-Memory-/203348719034'
    } ,
    {
        title: 'Lenovo Ideapad 3 15.6" FHD Touch Screen Laptop - Intel Core i5 11th Gen - 12G...',
        imageUrl: 'https://i.ebayimg.com/00/s/MTIyNlgxNjAw/z/PRwAAOSwSz1hG9wZ/$_1.JPG',
        price: '619.99',
        productUrl: 'https://www.ebay.com/itm/Lenovo-Ideapad-3-15-6-FHD-Touch-Screen-Laptop-Intel-Core-i5-11th-Gen-12G-/194484212435'
    } ,
    {
        title: 'Acer Spin 3 - 14" Laptop AMD Ryzen 3 3250U 2.6GHz 4GB Ram 128GB SSD Win 10 H S',
        imageUrl: 'https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/iYwAAOSwmHRhOha3/$_1.JPG',
        price: '289.0',
        productUrl: 'https://www.ebay.com/itm/Acer-Spin-3-14-Laptop-AMD-Ryzen-3-3250U-2-6GHz-4GB-Ram-128GB-SSD-Win-10-H-S-/254839947389'
    } ,
    {
        title: 'Dell Latitude E7250 Laptop 12.5in. (256GB, Intel Core i5, 2.3GHz, 8GB) Window 10',
        imageUrl: 'https://i.ebayimg.com/00/s/ODMwWDc4Ng==/z/yNoAAOSwnoBhp-Og/$_1.JPG',
        price: '139.99',
        productUrl: 'https://www.ebay.com/itm/Dell-Latitude-E7250-Laptop-12-5in-256GB-Intel-Core-i5-2-3GHz-8GB-Window-10-/255256609568'
    } ,
    {
        title: 'Lenovo IdeaPad Gaming 3 15.6" 120Hz Ryzen 5-5600H 8GB RAM 512GB SSD RTX 3050 Ti',
        imageUrl: 'https://i.ebayimg.com/00/s/NTAwWDUwMA==/z/ujQAAOSwY-NhgMaX/$_1.JPG',
        price: '779.99',
        productUrl: 'https://www.ebay.com/itm/Lenovo-IdeaPad-Gaming-3-15-6-120Hz-Ryzen-5-5600H-8GB-RAM-512GB-SSD-RTX-3050-Ti-/124977213779'
    } ,
    {
        title: 'ASUS - TUF Gaming 17.3" Laptop - Intel Core i5 - 8GB Memory - NVIDIA GeForce ...',
        imageUrl: 'https://i.ebayimg.com/00/s/OTM5WDE2MDA=/z/WJUAAOSwYVRhlzbe/$_1.JPG',
        price: '899.99',
        productUrl: 'https://www.ebay.com/itm/ASUS-TUF-Gaming-17-3-Laptop-Intel-Core-i5-8GB-Memory-NVIDIA-GeForce-/203705868103'
    } ,
    {
        title: 'Samsung Chromebook Laptop 11.6" Laptop Intel Dual-Core 16GB SSD Wifi Webcam Cool',
        imageUrl: 'https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/9tYAAOSwFBxhAbrz/$_1.JPG',
        price: '79.0',
        productUrl: 'https://www.ebay.com/itm/Samsung-Chromebook-Laptop-11-6-Laptop-Intel-Dual-Core-16GB-SSD-Wifi-Webcam-Cool-/154586988891'
    } ,
    {
        title: 'Full set',
        imageUrl: 'https://i.ebayimg.com/00/s/OTYwWDcyMA==/z/VPkAAOSwWwdhdgV3/$_1.JPG',
        price: '989.98',
        productUrl: 'https://www.ebay.com/itm/Full-set-/324848297148'
    } ,
    {
        title: 'HP 14-fq0037nr 14" HD Laptop AMD 3020e (1.2GHz) 4GB 64GB eMMC Win 10 S',
        imageUrl: 'https://i.ebayimg.com/00/s/MTAxNFgxNTAw/z/26kAAOSwfnBhHBHV/$_1.JPG',
        price: '219.99',
        productUrl: 'https://www.ebay.com/itm/HP-14-fq0037nr-14-HD-Laptop-AMD-3020e-1-2GHz-4GB-64GB-eMMC-Win-10-S-/373688087801'
    } ,
    {
        title: 'Dell Latitude 3150 11.6"  Laptop Intel 1.6GHz 4GB 128GB SSD Windows 10',
        imageUrl: 'https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/eV8AAOSwMulg1hUh/$_1.JPG',
        price: '119.0',
        productUrl: 'https://www.ebay.com/itm/Dell-Latitude-3150-11-6-Laptop-Intel-1-6GHz-4GB-128GB-SSD-Windows-10-/324691098458'
    } ,
    {
        title: 'Dell Latitude Business Light Gaming Laptop Win 10 Intel Core i5 16GB RAM 2TB SSD',
        imageUrl: 'https://i.ebayimg.com/thumbs/images/g/De0AAOSwHIRgsaTu/s-l140.jpg',
        price: '310.0',
        productUrl: 'https://www.ebay.com/itm/Dell-Latitude-Business-Light-Gaming-Laptop-Win-10-Intel-Core-i5-16GB-RAM-2TB-SSD-/333514362236?var=542678672453'
    } ,
    {
        title: 'Dell Latitude 7480 14" FHD i5-7300U 8GB RAM 128GB SSD Win 10 Pro Touch Screen',
        imageUrl: 'https://i.ebayimg.com/00/s/OTAwWDEyMDA=/z/pskAAOSwUi9hp6Xm/$_1.JPG',
        price: '315.0',
        productUrl: 'https://www.ebay.com/itm/Dell-Latitude-7480-14-FHD-i5-7300U-8GB-RAM-128GB-SSD-Win-10-Pro-Touch-Screen-/353615596205'
    } ,
    {
        title: 'Lenovo Thinkpad Yoga Touchscreen Laptop Computer Windows 10 4GB 128GB SSD HDMI',
        imageUrl: 'https://i.ebayimg.com/00/s/NTAwWDUwMA==/z/YOsAAOSwYeZdFnHv/$_1.JPG',
        price: '139.99',
        productUrl: 'https://www.ebay.com/itm/Lenovo-Thinkpad-Yoga-Touchscreen-Laptop-Computer-Windows-10-4GB-128GB-SSD-HDMI-/264290279789'
    } ,
    {
        title: 'Dell Latitude 7390 Laptop 13.3" Core i5-8350U 1.7GHz 8GB RAM 256GB SSD W10P',
        imageUrl: 'https://i.ebayimg.com/00/s/Njc1WDEyMDA=/z/wG0AAOSwgsxhm9kD/$_1.JPG',
        price: '299.0',
        productUrl: 'https://www.ebay.com/itm/Dell-Latitude-7390-Laptop-13-3-Core-i5-8350U-1-7GHz-8GB-RAM-256GB-SSD-W10P-/393716205261'
    } ,
    {
        title: 'Microsoft - Surface Laptop 4 - 13.5Touch-Screen AMD Ryzen5 Surface® Edi...',
        imageUrl: 'https://i.ebayimg.com/00/s/OTQzWDE2MDA=/z/vHIAAOSwOnRhafkf/$_1.JPG',
        price: '699.99',
        productUrl: 'https://www.ebay.com/itm/Microsoft-Surface-Laptop-4-13-5Touch-Screen-AMD-Ryzen5-Surface-Edi-/324861943315'
    } ,
    {
        title: 'ASUS - Zenbook 14" Laptop - AMD Ryzen 5 - 8GB Memory - NVIDIA GeForce MX450 -...',
        imageUrl: 'https://i.ebayimg.com/00/s/OTkwWDE2MDA=/z/3U4AAOSwRIVhO54Z/$_1.JPG',
        price: '719.99',
        productUrl: 'https://www.ebay.com/itm/ASUS-Zenbook-14-Laptop-AMD-Ryzen-5-8GB-Memory-NVIDIA-GeForce-MX450-/194353706390'
    } ,
    {
        title: "Dell Latitude 3190 Windows 10 Pro 4GB/64GB 11.6'' Laptop",
        imageUrl: 'https://i.ebayimg.com/00/s/ODY4WDEyOTA=/z/pzoAAOSwpDJhm8~j/$_1.JPG',
        price: '185.0',
        productUrl: 'https://www.ebay.com/itm/Dell-Latitude-3190-Windows-10-Pro-4GB-64GB-11-6-Laptop-/255241374727'
    } ,
    {
        title: 'ASUS - Vivobook 14" Laptop - Intel 10th Gen i3 - 4GB Memory - 128GB SSD - DRE...',
        imageUrl: 'https://i.ebayimg.com/00/s/OTQyWDEyNzg=/z/px8AAOSwRLJgiaCw/$_1.JPG',
        price: '369.99',
        productUrl: 'https://www.ebay.com/itm/ASUS-Vivobook-14-Laptop-Intel-10th-Gen-i3-4GB-Memory-128GB-SSD-DRE-/203563391477'
    } ,
    {
        title: 'HP 14-db0025nr 14" HD Touch Chromebook AMD A4-9120e 4GB 32GB eMMC Chrome OS 2019',
        imageUrl: 'https://i.ebayimg.com/00/s/MTQwMFgxNDAw/z/H4YAAOSwuZNhJDoi/$_1.JPG',
        price: '149.99',
        productUrl: 'https://www.ebay.com/itm/HP-14-db0025nr-14-HD-Touch-Chromebook-AMD-A4-9120e-4GB-32GB-eMMC-Chrome-OS-2019-/164222835022'
    } ,
    {
        title: 'Dell Inspiron 15 3510 Laptop 15.6"HD Intel Celeron N4020 128GB SSD 4GB RAM',
        imageUrl: 'https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/DPcAAOSwxglhfG3B/$_1.JPG',
        price: '319.99',
        productUrl: 'https://www.ebay.com/itm/Dell-Inspiron-15-3510-Laptop-15-6-HD-Intel-Celeron-N4020-128GB-SSD-4GB-RAM-/224667558389'
    } ,
    {
        title: 'Lenovo IdeaPad 3 15.6 Touchscreen Laptop Intel Core i5-1135G7 8GB RAM 256GB SSD',
        imageUrl: 'https://i.ebayimg.com/00/s/NTAwWDUwMA==/z/mj8AAOSwUhVg8p0O/$_1.JPG',
        price: '499.99',
        productUrl: 'https://www.ebay.com/itm/Lenovo-IdeaPad-3-15-6-Touchscreen-Laptop-Intel-Core-i5-1135G7-8GB-RAM-256GB-SSD-/294279771713'
    } ,
    {
        title: 'ASUS - TUF Gaming 17.3" Laptop - Intel Core i5 - 8GB Memory - NVIDIA GeForce ...',
        imageUrl: 'https://i.ebayimg.com/00/s/OTUyWDE2MDA=/z/bcoAAOSwPp5hG9wI/$_1.JPG',
        price: '999.99',
        productUrl: 'https://www.ebay.com/itm/ASUS-TUF-Gaming-17-3-Laptop-Intel-Core-i5-8GB-Memory-NVIDIA-GeForce-/324756486862'
    } ,
    {
        title: 'NEW Asus Ultra Thin 15.6" FHD Intel Celeron N4020 128GB eMMC 4GB RAM Win 10 Home',
        imageUrl: 'https://i.ebayimg.com/00/s/MTEwOVgxNjAw/z/Vh8AAOSwKQZg0LJ~/$_1.JPG',
        price: '294.99',
        productUrl: 'https://www.ebay.com/itm/NEW-Asus-Ultra-Thin-15-6-FHD-Intel-Celeron-N4020-128GB-eMMC-4GB-RAM-Win-10-Home-/294238104626'
    } ,
    {
        title: 'Dell Inspiron 15 5510 Laptop 15.6"FHD Intel i5-11320H Iris Xe 256GB SSD 8GB RAM',
        imageUrl: 'https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/cCAAAOSwSUdhfHTT/$_1.JPG',
        price: '649.99',
        productUrl: 'https://www.ebay.com/itm/Dell-Inspiron-15-5510-Laptop-15-6-FHD-Intel-i5-11320H-Iris-Xe-256GB-SSD-8GB-RAM-/224667577017'
    } ,
    {
        title: '`CLEARANCE SALE~Touchscreen HP Elitebook i5 Laptop PC 16GB RAM 256GB SSD',
        imageUrl: 'https://i.ebayimg.com/00/s/MTAwMlgxNDg0/z/AMIAAOSwRpRhM6Ut/$_1.JPG',
        price: '369.97',
        productUrl: 'https://www.ebay.com/itm/CLEARANCE-SALE-Touchscreen-HP-Elitebook-i5-Laptop-PC-16GB-RAM-256GB-SSD-/114970600106'
    } ,
    {
        title: 'Acer Swift 3 - 13.5" Laptop Intel Core i7-1165G7 2.8GHz 16GB RAM 512GB SSD W10H',
        imageUrl: 'https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/iEIAAOSw~NJhLUqd/$_1.JPG',
        price: '699.99',
        productUrl: 'https://www.ebay.com/itm/Acer-Swift-3-13-5-Laptop-Intel-Core-i7-1165G7-2-8GHz-16GB-RAM-512GB-SSD-W10H-/274927227445'
    } ,
    {
        title: 'Lenovo Legion 5 Pro Gaming 165Hz WQXGA Ryzen 7-5800H 16GB RAM 512GB SSD RTX 3060',
        imageUrl: 'https://i.ebayimg.com/00/s/NTAwWDUwMA==/z/mHAAAOSwmkRhblGT/$_1.JPG',
        price: '1279.99',
        productUrl: 'https://www.ebay.com/itm/Lenovo-Legion-5-Pro-Gaming-165Hz-WQXGA-Ryzen-7-5800H-16GB-RAM-512GB-SSD-RTX-3060-/304185773366'
    } ,
    {
        title: 'ASUS C100PA 10" 2-in-1 Touchscreen Chromebook 4GB 16GB SSD 1.8GHZ Metal Laptop',
        imageUrl: 'https://i.ebayimg.com/thumbs/images/g/Fl0AAOSwf2RhlxSy/s-l140.jpg',
        price: '90.0',
        productUrl: 'https://www.ebay.com/itm/ASUS-C100PA-10-2-in-1-Touchscreen-Chromebook-4GB-16GB-SSD-1-8GHZ-Metal-Laptop-/154707890550'
    } ,
    {
        title: 'Lenovo - Ideapad 3 15 15.6" Laptop - AMD Ryzen 3 - 8GB Memory - 128GB SSD - P...',
        imageUrl: 'https://i.ebayimg.com/00/s/MTMzMFgxNjAw/z/fJcAAOSwMNpgfbDR/$_1.JPG',
        price: '359.99',
        productUrl: 'https://www.ebay.com/itm/Lenovo-Ideapad-3-15-15-6-Laptop-AMD-Ryzen-3-8GB-Memory-128GB-SSD-P-/194234759738'
    } ,
    {
        title: 'Samsung Chromebook XE500C12 Laptop 11.6" 16GB SSD 4GB HDMI Webcam Engraved﻿',
        imageUrl: 'https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/ZCMAAOSwA5FheBDs/$_1.JPG',
        price: '62.99',
        productUrl: 'https://www.ebay.com/itm/Samsung-Chromebook-XE500C12-Laptop-11-6-16GB-SSD-4GB-HDMI-Webcam-Engraved-/274874442599'
    } ,
    {
        title: 'Lenovo Yoga 6 13 2-in-1 13.3" Touch Screen Laptop - AMD Ryzen 5 - 8GB Memory ...',
        imageUrl: 'https://i.ebayimg.com/00/s/MTIzN1gxNjAw/z/-IcAAOSwuNRhO54L/$_1.JPG',
        price: '599.99',
        productUrl: 'https://www.ebay.com/itm/Lenovo-Yoga-6-13-2-in-1-13-3-Touch-Screen-Laptop-AMD-Ryzen-5-8GB-Memory-/324785384759'
    } ,
    {
        title: 'Dell Chromebook 11 3120 11.6" Intel Celeron N2840 2.16GHz 4GB 16GB SSD XDGJH',
        imageUrl: 'https://i.ebayimg.com/00/s/MTQzN1gxNTg2/z/69UAAOSwewpe2BH~/$_1.JPG',
        price: '29.99',
        productUrl: 'https://www.ebay.com/itm/Dell-Chromebook-11-3120-11-6-Intel-Celeron-N2840-2-16GHz-4GB-16GB-SSD-XDGJH-/124768163976'
    } ,
    {
        title: 'HP Chromebook 14-SMB 14" Laptop Intel Celeron 2GB RAM 16GB eMMC',
        imageUrl: 'https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/Ir4AAOSwMTdgF~sk/$_1.JPG',
        price: '48.88',
        productUrl: 'https://www.ebay.com/itm/HP-Chromebook-14-SMB-14-Laptop-Intel-Celeron-2GB-RAM-16GB-eMMC-/322566394002'
    } ,
    {
        title: 'Dell Latitude Laptop Computer Windows 10 Dual Core PC 4GB 160GB WiFi HD Notebook',
        imageUrl: 'https://i.ebayimg.com/00/s/NTAwWDUwMA==/z/v4QAAOSwNixcwJO0/$_1.JPG',
        price: '144.99',
        productUrl: 'https://www.ebay.com/itm/Dell-Latitude-Laptop-Computer-Windows-10-Dual-Core-PC-4GB-160GB-WiFi-HD-Notebook-/283189428608'
    } ,
    {
        title: 'Lenovo N22 11.6" Laptop Computer Intel 4GB Ram 64GB SSD Webcam WIFI Windows 10',
        imageUrl: 'https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/fFIAAOSwk3hhbdpO/$_1.JPG',
        price: '83.83',
        productUrl: 'https://www.ebay.com/itm/Lenovo-N22-11-6-Laptop-Computer-Intel-4GB-Ram-64GB-SSD-Webcam-WIFI-Windows-10-/324847016064'
    } ,
    {
        title: 'RB DELL LATITUDE 5490 FHD 16GB 256GB SSD  I5-8350U 1.7GHz WIN 10 PRO',
        imageUrl: 'https://i.ebayimg.com/00/s/NjE0WDEwNjA=/z/RHAAAOSwp0hgtsmL/$_1.JPG',
        price: '399.99',
        productUrl: 'https://www.ebay.com/itm/RB-DELL-LATITUDE-5490-FHD-16GB-256GB-SSD-I5-8350U-1-7GHz-WIN-10-PRO-/265351425157'
    } ,
    {
        title: 'Microsoft - Surface Laptop Go - 12.4" Touch-Screen - Intel 10th Generation Co...',
        imageUrl: 'https://i.ebayimg.com/00/s/OTU1WDE2MDA=/z/lKsAAOSwRKJhgUkB/$_1.JPG',
        price: '549.99',
        productUrl: 'https://www.ebay.com/itm/Microsoft-Surface-Laptop-Go-12-4-Touch-Screen-Intel-10th-Generation-Co-/203682700024'
    } ,
    {
        title: 'Dell Latitude Laptop 15.4” HD Screen Intel 2.4GHz 4GB 1TB DVD-RW Windows 10 Pro',
        imageUrl: 'https://i.ebayimg.com/00/s/NTAwWDUwMA==/z/UpkAAOSwPk1eJh5s/$_1.JPG',
        price: '174.99',
        productUrl: 'https://www.ebay.com/itm/Dell-Latitude-Laptop-15-4-HD-Screen-Intel-2-4GHz-4GB-1TB-DVD-RW-Windows-10-Pro-/264408661901'
    } ,
    {
        title: 'SAMSUNG CHROMEBOOK 4 11.6" INTEL CELERON 2.6GHZ 4GB 32GB HD GOOGLE ASSISTANT',
        imageUrl: 'https://i.ebayimg.com/00/s/NTAwWDUwMA==/z/0h0AAOSwwwdhLkZ2/$_1.JPG',
        price: '99.95',
        productUrl: 'https://www.ebay.com/itm/SAMSUNG-CHROMEBOOK-4-11-6-INTEL-CELERON-2-6GHZ-4GB-32GB-HD-GOOGLE-ASSISTANT-/124878708950'
    } ,
    {
        title: 'HP Chromebook 14 Laptop Intel 2.16 GHz 4 Memory 16 HD Bluetooth HDMI Webcam WiFi',
        imageUrl: 'https://i.ebayimg.com/00/s/MTIyNFgxNTEy/z/vuAAAOSwCJNhgfaF/$_1.JPG',
        price: '140.0',
        productUrl: 'https://www.ebay.com/itm/HP-Chromebook-14-Laptop-Intel-2-16-GHz-4-Memory-16-HD-Bluetooth-HDMI-Webcam-WiFi-/115077262449?var=0'
    } ,
    {
        title: 'Dell Chromebook 11 3189 2 in 1 TouchScreen Intel Celeron 16GB 4GB RAM Laptop',
        imageUrl: 'https://i.ebayimg.com/00/s/OTkxWDE1MDA=/z/WqkAAOSwnq5hFBdx/$_1.JPG',
        price: '88.99',
        productUrl: 'https://www.ebay.com/itm/Dell-Chromebook-11-3189-2-1-TouchScreen-Intel-Celeron-16GB-4GB-RAM-Laptop-/255088265400'
    } ,
    {
        title: 'HP Essential Laptop Computer 17.3" FHD Intel Core i5 12 GB memory; 1 TB HDD',
        imageUrl: 'https://i.ebayimg.com/00/s/NDAwWDQwMA==/z/QXUAAOSwY3RhF7bM/$_1.JPG',
        price: '529.99',
        productUrl: 'https://www.ebay.com/itm/HP-Essential-Laptop-Computer-17-3-FHD-Intel-Core-i5-12-GB-memory-1-TB-HDD-/154569195431'
    } ,
    {
        title: 'Dell Inspiron 15 3511 Laptop 15.6"FHD Intel i3-1115G4 128GB SSD 4GB RAM',
        imageUrl: 'https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/p5oAAOSw7LBhfHTQ/$_1.JPG',
        price: '429.99',
        productUrl: 'https://www.ebay.com/itm/Dell-Inspiron-15-3511-Laptop-15-6-FHD-Intel-i3-1115G4-128GB-SSD-4GB-RAM-/224667577001'
    } ,
    {
        title: 'Lenovo IdeaPad 5 15.6 Laptop Ryzen 7-4700U 8GB RAM 512GB SSD Platinum Gray',
        imageUrl: 'https://i.ebayimg.com/00/s/NTAwWDUwMA==/z/UisAAOSwVqBhSWe2/$_1.JPG',
        price: '549.99',
        productUrl: 'https://www.ebay.com/itm/Lenovo-IdeaPad-5-15-6-Laptop-Ryzen-7-4700U-8GB-RAM-512GB-SSD-Platinum-Gray-/124911928789'
    } ,
    {
        title: 'Lenovo - Chromebook 3 11" Chromebook - AMD A6 - 4GB Memory - 32GB eMMC Flash ...',
        imageUrl: 'https://i.ebayimg.com/00/s/MTE2NlgxNjAw/z/UQ0AAOSwG-dff0ps/$_1.JPG',
        price: '119.0',
        productUrl: 'https://www.ebay.com/itm/Lenovo-Chromebook-3-11-Chromebook-AMD-A6-4GB-Memory-32GB-eMMC-Flash-/203447748973'
    } ,
    {
        title: 'Dell - G15 15.6" FHD Gaming Laptop - AMD Ryzen 7 - 8GB Memory - NVIDIA GeFo...',
        imageUrl: 'https://i.ebayimg.com/00/s/MTEzMFgxNjAw/z/a8UAAOSwhmFhaffL/$_1.JPG',
        price: '1149.99',
        productUrl: 'https://www.ebay.com/itm/Dell-G15-15-6-FHD-Gaming-Laptop-AMD-Ryzen-7-8GB-Memory-NVIDIA-GeFo-/324862000541'
    } ,
    {
        title: 'NEW Samsung Chromebook 4 11.6” HD Intel Celeron 32GB eMMC 4GB RAM',
        imageUrl: 'https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/3XMAAOSwk8te19XL/$_1.JPG',
        price: '144.99',
        productUrl: 'https://www.ebay.com/itm/NEW-Samsung-Chromebook-4-11-6-HD-Intel-Celeron-32GB-eMMC-4GB-RAM-/293601615688'
    } ,
    {
        title: 'HP EliteBook 8470P 14" Laptop Computer Core i5 8GB Ram 1TB DVD WIFI Windows 10',
        imageUrl: 'https://i.ebayimg.com/00/s/MTUwMFgxNTAw/z/esoAAOSwzgBhnqRl/$_1.JPG',
        price: '249.99',
        productUrl: 'https://www.ebay.com/itm/HP-EliteBook-8470P-14-Laptop-Computer-Core-i5-8GB-Ram-1TB-DVD-WIFI-Windows-10-/255108498620'
    } ,
    {
        title: 'HP 14 Series 14" Laptop AMD 3020e 4GB RAM 64GB eMMc Jet Black',
        imageUrl: 'https://i.ebayimg.com/00/s/NTAwWDUwMA==/z/k~8AAOSwP5FfU1to/$_1.JPG',
        price: '239.99',
        productUrl: 'https://www.ebay.com/itm/HP-14-Series-14-Laptop-AMD-3020e-4GB-RAM-64GB-eMMc-Jet-Black-/303675802585'
    } ,
    {
        title: 'Lenovo Legion 5 17.3 144Hz Gaming AMD Ryzen 7-5800H 16GB RAM 256GB SSD RTX 3060',
        imageUrl: 'https://i.ebayimg.com/00/s/NTAwWDUwMA==/z/QLUAAOSwHZlhgMaW/$_1.JPG',
        price: '1179.99',
        productUrl: 'https://www.ebay.com/itm/Lenovo-Legion-5-17-3-144Hz-Gaming-AMD-Ryzen-7-5800H-16GB-RAM-256GB-SSD-RTX-3060-/294500815941'
    } ,
    {
        title: 'NEW Gateway (Acer) 15.6 FHD Intel QuadCore 128GB SSD 4GB RAM + 1Yr Office 365 ',
        imageUrl: 'https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/K-wAAOSwoYRhoUT4/$_1.JPG',
        price: '249.99',
        productUrl: 'https://www.ebay.com/itm/NEW-Gateway-Acer-15-6-FHD-Intel-QuadCore-128GB-SSD-4GB-RAM-1Yr-Office-365-/194347881780'
    } ,
    {
        title: 'Samsung - Galaxy Book Flex2 Alpha 13.3" QLED Touch-Screen Laptop - Intel Core...',
        imageUrl: 'https://i.ebayimg.com/00/s/MTI3OFgxNjAw/z/fXwAAOSwmpZgotGB/$_1.JPG',
        price: '849.99',
        productUrl: 'https://www.ebay.com/itm/Samsung-Galaxy-Book-Flex2-Alpha-13-3-QLED-Touch-Screen-Laptop-Intel-Core-/203705858642'
    } ,
    {
        title: 'Dell Latitude Laptop Computer 14" Core i3 8GB RAM 500GB DVD WiFi Windows 10 PC',
        imageUrl: 'https://i.ebayimg.com/00/s/NTAwWDUwMA==/z/zFQAAOSwvJVeTu79/$_1.JPG',
        price: '184.99',
        productUrl: 'https://www.ebay.com/itm/Dell-Latitude-Laptop-Computer-14-Core-i3-8GB-RAM-500GB-DVD-WiFi-Windows-10-PC-/283790139539'
    } ,
    {
        title: 'Dell Latitude E5470 Business 14" HD i5-6300U 8GB 256GB SSD Webcam Win10 Pro ',
        imageUrl: 'https://i.ebayimg.com/00/s/OTQ2WDE1MDA=/z/fOMAAOSwWIJhGFVF/$_1.JPG',
        price: '319.0',
        productUrl: 'https://www.ebay.com/itm/Dell-Latitude-E5470-Business-14-HD-i5-6300U-8GB-256GB-SSD-Webcam-Win10-Pro-/114945846222'
    } ,
    {
        title: 'Lenovo ThinkPad T460 Laptop i5-6300U 2.40GHz 128GB SSD 8GB RAM 14.0" NO OS',
        imageUrl: 'https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/~2cAAOSwpQFgo9Cv/$_1.JPG',
        price: '193.48',
        productUrl: 'https://www.ebay.com/itm/Lenovo-ThinkPad-T460-Laptop-i5-6300U-2-40GHz-128GB-SSD-8GB-RAM-14-0-NO-OS-/234027200220'
    } ,
    {
        title: 'HP - ENVY 2-in-1 13" Touch-Screen Laptop - Intel Evo Platform Core i5 - 8GB M...',
        imageUrl: 'https://i.ebayimg.com/00/s/MTI0MFgxNjAw/z/X3MAAOSwTA1hG9wz/$_1.JPG',
        price: '859.99',
        productUrl: 'https://www.ebay.com/itm/HP-ENVY-2-in-1-13-Touch-Screen-Laptop-Intel-Evo-Platform-Core-i5-8GB-M-/203564792230'
    } ,
    {
        title: 'NEW Acer 11.6" TOUCHSCREEN 2-in-1 IPS HD Chromebook 32GB SSD 4GB Webcam Spin 311',
        imageUrl: 'https://i.ebayimg.com/00/s/ODE3WDk5MQ==/z/uLsAAOSw7dFg5lOy/$_1.JPG',
        price: '179.0',
        productUrl: 'https://www.ebay.com/itm/NEW-Acer-11-6-TOUCHSCREEN-2-in-1-IPS-HD-Chromebook-32GB-SSD-4GB-Webcam-Spin-311-/274860179339'
    } ,
    {
        title: 'HP - Pavilion x360 2-in-1 14" Touch-Screen Laptop - Intel Core i5 - 8GB Memor...',
        imageUrl: 'https://i.ebayimg.com/00/s/MTMyMVgxNjAw/z/X2sAAOSwIAxff0qv/$_1.JPG',
        price: '799.99',
        productUrl: 'https://www.ebay.com/itm/HP-Pavilion-x360-2-in-1-14-Touch-Screen-Laptop-Intel-Core-i5-8GB-Memor-/193702163378'
    } ,
    {
        title: '2021 HP Laptop Computer 15.6" LED Intel Pentium 2.70GHz 4GB 128GB SSD WebCam',
        imageUrl: 'https://i.ebayimg.com/00/s/MTIwMFgxMjAw/z/OTcAAOSwyWlhpSUl/$_1.JPG',
        price: '287.71',
        productUrl: 'https://www.ebay.com/itm/2021-HP-Laptop-Computer-15-6-LED-Intel-Pentium-2-70GHz-4GB-128GB-SSD-WebCam-/121771901698'
    } ,
    {
        title: 'HP Laptop Computer ProBook 11 G1 11.6" Windows 10 Home Celeron 4GB Ram 128GB SSD',
        imageUrl: 'https://i.ebayimg.com/00/s/NTAwWDUwMA==/z/QUUAAOSwvq5hqUaZ/$_1.JPG',
        price: '139.99',
        productUrl: 'https://www.ebay.com/itm/HP-Laptop-Computer-ProBook-11-G1-11-6-Windows-10-Home-Celeron-4GB-Ram-128GB-SSD-/284147964308'
    } ,
    {
        title: 'Dell 15.6" Business Laptop Core i7 8GB 500GB Webcam WiFi Windows 10 Professional',
        imageUrl: 'https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/TtIAAOSwewVhjEbe/$_1.JPG',
        price: '259.0',
        productUrl: 'https://www.ebay.com/itm/Dell-15-6-Business-Laptop-Core-i7-8GB-500GB-Webcam-WiFi-Windows-10-Professional-/333877903764'
    }]

class EbayPage extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                ebayData: [],
                query: ""
            }
        this.recordQuery = this.recordQuery.bind(this);
        this.getEbayData = this.getEbayData.bind(this);
    }

    getEbayData() {
        ebayApi.findItemsByKeywords({
            keywords: this.state.query
        }).then(data => {
            data.map((each) => {
                each.searchResult.map((eachItem) => {
                    eachItem.item.map(it => {
                        let temp
                        if (it.pictureURLLarge !== undefined) {
                            temp =
                                {
                                    "title": it.title[0],
                                    "imageUrl": it.pictureURLLarge[0],
                                    "price": it.sellingStatus[0].currentPrice[0].__value__,
                                    "productUrl": it.viewItemURL[0]
                                }
                        } else {
                            temp =
                                {
                                    "title": it.title[0],
                                    "imageUrl": it.galleryURL[0],
                                    "price": it.sellingStatus[0].currentPrice[0].__value__,
                                    "productUrl": it.viewItemURL[0]
                                }
                        }
                        this.state.ebayData.unshift(temp);
                    })
                })
            })
        });
        console.log(this.state.ebayData)
    }

    recordQuery(event) {
        this.state.query = event.target.value;
    }

    render() {
        return (
            <section>
                <div className={"topBar"}>
                    <button id={"amazonBtn"}
                            className={"generalBtn"}
                            onClick={() => goToAmazon()}>
                        Amazon
                    </button>
                    <button id={"ebayBtn"}
                            className={"generalBtn"}
                            onClick={() => goToHome()}>
                        Home
                    </button>
                    <button id={"logOut"}
                            onClick={() => logOut()}>
                        Log Out
                    </button>
                    <header id={"heading"}>{"Juxtapose"}</header>
                </div>
                <h1>Top deals on Laptops</h1>
                <section>
                    {
                        ebayData.map((eachItem) => {
                            return <Product title={eachItem.title}
                                            imageUrl={eachItem.imageUrl}
                                            price={eachItem.price}
                                            productUrl={eachItem.productUrl}/>
                        })
                    }
                </section>
            </section>
        )
    }
}

function goToHome() {
    ReactDOM.render(<HomePage/>, document.getElementById("root"));
}

function goToAmazon() {
    ReactDOM.render(<AmazonPage/>, document.getElementById("root"));
}

function logOut() {
    window.location.href = '/Login'
}

export default EbayPage