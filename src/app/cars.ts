export let cars = [{
brand: "Hyundai",
model: "I30 SW AT",
insurance: "A",
pricePerDay: 38,
fuelType: "Gasoline",
seatNum: 5,
image: "https://hyundai.azureedge.net/media/24569/pdpe_wa_toptrim_dg03-02_ext_3-4-front_rgb_v01_w4a.jpg?anchor=center&mode=crop&width=1120&height=600&quality=90&rnd=132423329080000000"
}, {
    brand: "Volkswagen",
    model: "Polo TDI",
    insurance: "B",
    pricePerDay: 25,
    fuelType: "Diesel",
    seatNum: 5,
    image: "https://imgd.aeplcdn.com/0x0/cw/ec/22037/Volkswagen-Polo-Exterior-95634.jpg?wm=1"
    }, {
        brand: "Skoda",
        model: "Fabia SW",
        insurance: "B",
        pricePerDay: 24,
        fuelType: "Gasoline",
        seatNum: 5,
        image: "https://cf-cdn-v5.skoda.at/media/Model_Stage_Image_Component/124-stage-image/dh-660-e9d92a/3d9f1640/1675262512/fabia-combi-sc-front.png"
        }, {
            brand: "Skoda",
            model: "Fabia",
            insurance: "C",
            pricePerDay: 22,
            fuelType: "Gasoline",
            seatNum: 5,
            image: "https://cdn.nwi-ms.com/media/at/C/mc/PJ33A4M5/model/front.jpg?F=K4K4&P=NL&M=&size=S"
            }, {
                brand: "Toyota",
                model: "Aygo AT",
                insurance: "C",
                pricePerDay: 22,
                fuelType: "Gasoline",
                seatNum: 4,           
                image: "https://kong-proxy-aws.toyota-europe.com/c1-images/resize/ccis/680x680/zip/at/configurationtype/visual-for-grade-selector/product-token/86ddecf9-2411-4e46-b791-5cf0f67b0d9e/grade/c837ddb1-151b-4fd4-89be-9b52b311c420/body/7b77d85b-8f26-4645-82ac-22154a7d6293/fallback/true/padding/50,50,50,50/image-quality/70/day-exterior-4_040.png"
                }, {
                    brand: "Ford",
                    model: "Focus",
                    insurance: "A",
                    pricePerDay: 28,
                    fuelType: "Diesel",
                    seatNum: 5,
                    image: "https://www.gpas-cache.ford.com/guid/c1d28259-7cf1-3975-8c00-ffe104eabc6d.png"
                    }, {
                        brand: "Volkswagen",
                        model: "Golf AT",
                        insurance: "B",
                        pricePerDay: 35,
                        fuelType: "Gasoline",
                        seatNum: 5,
                        image: "https://cf-cdn-v6.volkswagen.at/media/Abstract_Image_B960_Component.Content_Model_HighlightFeatureSection_Item_Content_Gallery_Item_Component/566-18643-12815-content-gallery-12816-b960/dh-2560-e0864f/4924d50e/1675280376/vw-volkswagen-golf-gte-2014-historie.jpg"
                        }, {
                            brand: "Ford",
                            model: "Focus SW CRDi",
                            insurance: "C",
                            pricePerDay: 32,
                            fuelType: "Diesel",
                            seatNum: 5,
                            image: "https://storage.edidomus.it/ListinoAuto/webFoto_16_9_640/90013233.jpg"
                            }, {
                                brand: "Skoda",
                                model: "Octavia SW TDI AT",
                                insurance: "A",
                                pricePerDay: 43,
                                fuelType: "Diesel",
                                seatNum: 5,
                                image: "https://cdn.nwi-ms.com/media/at/C/mc/NX52L5M5/model/front.jpg?F=K4K4&P=BG&M=$XA&size=S"
                                }, {
                                    brand: "Hyundai",
                                    model: "IX20 AT",
                                    insurance: "C",
                                    pricePerDay: 30,
                                    fuelType: "Gasoline",
                                    seatNum: 5,
                                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCsjgUSlRKlk9YFs0FzAVG4OmATkAqsP1Hgg&usqp=CAU"
                                    }];

                                    export interface Icars {
                                        brand: string, 
                                        model: string, 
                                        insurance: string, 
                                        pricePerDay: number, 
                                        fuelType: string, 
                                        seatNum: number,
                                        image: string
                                    }