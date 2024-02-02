import { useState } from "react";
import React, { Component } from 'react'

export const carDatas = [
    {
        id: 1,
        model: "X5",
        vendor: "Bmw",
        price: 120000,
        imageUrl: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230714060800_BMW_X5_facelift_rear.jpg&w=700&q=90&c=1",
    },
    {
        id: 2,
        model: "Malibu",
        vendor: "Chevrolet",
        price: 22000,
        imageUrl: "https://hips.hearstapps.com/hmg-prod/images/2019-chevrolet-malibu-rs-124-1568289291.jpg?crop=0.616xw:0.753xh;0.151xw,0.191xh&resize=768:*",
    },
    {
        id: 3,
        model: "Gls",
        vendor: "Mercedes",
        price: 100000,
        imageUrl: "https://car-images.bauersecure.com/wp-images/3474/076-mercedes-gls.jpg",
    },
    {
        id: 4,
        model: "Wrangler",
        vendor: "Jeep",
        price: 40000,
        imageUrl: "https://www.motortrend.com/uploads/sites/10/2020/12/2021-jeep-wrangler-sport-4wd-suv-angular-front.png",
    },

];