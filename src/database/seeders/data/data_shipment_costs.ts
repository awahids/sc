const dataShipmentCosts: {
  id: string
  driver_code: string;
  shipment_no: string;
  total_costs: string;
  cost_status: 'PENDING' | 'CONFIRMED' | 'PAID';
}[] = [
    {
      "id": "1",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT493",
      "total_costs": "3800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "2",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT994",
      "total_costs": "700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "3",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT247",
      "total_costs": "100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "4",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT516",
      "total_costs": "4000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "5",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT824",
      "total_costs": "5800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "6",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT796",
      "total_costs": "6800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "7",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT970",
      "total_costs": "7600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "8",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT998",
      "total_costs": "700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "9",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT345",
      "total_costs": "5600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "10",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT201",
      "total_costs": "2200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "11",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT257",
      "total_costs": "9200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "12",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT013",
      "total_costs": "4300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "13",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT546",
      "total_costs": "2900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "14",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT862",
      "total_costs": "7300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "15",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT996",
      "total_costs": "200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "16",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT553",
      "total_costs": "5700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "17",
      "driver_code": "DRIVER009",
      "shipment_no": "SHIPMENT773",
      "total_costs": "4600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "18",
      "driver_code": "DRIVER011",
      "shipment_no": "SHIPMENT034",
      "total_costs": "1500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "19",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT152",
      "total_costs": "2600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "20",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT819",
      "total_costs": "3700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "21",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT738",
      "total_costs": "4000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "22",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT050",
      "total_costs": "1600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "23",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT774",
      "total_costs": "1300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "24",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT639",
      "total_costs": "700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "25",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT189",
      "total_costs": "3600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "26",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT965",
      "total_costs": "1200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "27",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT506",
      "total_costs": "3400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "28",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT017",
      "total_costs": "6300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "29",
      "driver_code": "DRIVER021",
      "shipment_no": "SHIPMENT734",
      "total_costs": "6400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "30",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT395",
      "total_costs": "600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "31",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT798",
      "total_costs": "3500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "32",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT399",
      "total_costs": "2900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "33",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT268",
      "total_costs": "8100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "34",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT321",
      "total_costs": "2800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "35",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT369",
      "total_costs": "5400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "36",
      "driver_code": "DRIVER009",
      "shipment_no": "SHIPMENT502",
      "total_costs": "2000000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "37",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT939",
      "total_costs": "6400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "38",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT585",
      "total_costs": "5300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "39",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT615",
      "total_costs": "9800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "40",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT200",
      "total_costs": "800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "41",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT704",
      "total_costs": "500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "42",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT546",
      "total_costs": "2000000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "43",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT663",
      "total_costs": "9300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "44",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT456",
      "total_costs": "7900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "45",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT172",
      "total_costs": "3900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "46",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT297",
      "total_costs": "4700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "47",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT663",
      "total_costs": "5000000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "48",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT810",
      "total_costs": "8000000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "49",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT366",
      "total_costs": "1300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "50",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT356",
      "total_costs": "500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "51",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT695",
      "total_costs": "6200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "52",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT695",
      "total_costs": "8600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "53",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT534",
      "total_costs": "3600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "54",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT580",
      "total_costs": "3500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "55",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT146",
      "total_costs": "3400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "56",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT612",
      "total_costs": "1800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "57",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT623",
      "total_costs": "5000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "58",
      "driver_code": "DRIVER014",
      "shipment_no": "SHIPMENT572",
      "total_costs": "6700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "59",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT187",
      "total_costs": "8500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "60",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT125",
      "total_costs": "9600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "61",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT626",
      "total_costs": "7600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "62",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT240",
      "total_costs": "2800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "63",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT861",
      "total_costs": "3500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "64",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT219",
      "total_costs": "900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "65",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT214",
      "total_costs": "1700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "66",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT650",
      "total_costs": "600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "67",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT288",
      "total_costs": "5600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "68",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT814",
      "total_costs": "4300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "69",
      "driver_code": "DRIVER007",
      "shipment_no": "SHIPMENT906",
      "total_costs": "6400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "70",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT819",
      "total_costs": "1600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "71",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT391",
      "total_costs": "2700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "72",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT149",
      "total_costs": "7000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "73",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT435",
      "total_costs": "5800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "74",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT094",
      "total_costs": "6900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "75",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT849",
      "total_costs": "9200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "76",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT556",
      "total_costs": "6000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "77",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT529",
      "total_costs": "2200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "78",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT936",
      "total_costs": "8500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "79",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT436",
      "total_costs": "2000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "80",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT994",
      "total_costs": "4800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "81",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT175",
      "total_costs": "6700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "82",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT008",
      "total_costs": "5800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "83",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT962",
      "total_costs": "2200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "84",
      "driver_code": "DRIVER009",
      "shipment_no": "SHIPMENT540",
      "total_costs": "5000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "85",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT736",
      "total_costs": "9800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "86",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT023",
      "total_costs": "3000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "87",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT262",
      "total_costs": "1100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "88",
      "driver_code": "DRIVER011",
      "shipment_no": "SHIPMENT443",
      "total_costs": "7900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "89",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT561",
      "total_costs": "8100000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "90",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT318",
      "total_costs": "7200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "91",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT220",
      "total_costs": "6000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "92",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT772",
      "total_costs": "4200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "93",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT059",
      "total_costs": "4300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "94",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT128",
      "total_costs": "700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "95",
      "driver_code": "DRIVER021",
      "shipment_no": "SHIPMENT190",
      "total_costs": "1000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "96",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT203",
      "total_costs": "8200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "97",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT473",
      "total_costs": "2000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "98",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT735",
      "total_costs": "600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "99",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT294",
      "total_costs": "8600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "100",
      "driver_code": "DRIVER007",
      "shipment_no": "SHIPMENT120",
      "total_costs": "0.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "101",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT562",
      "total_costs": "3300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "102",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT569",
      "total_costs": "4500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "103",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT838",
      "total_costs": "3600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "104",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT682",
      "total_costs": "6300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "105",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT940",
      "total_costs": "8600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "106",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT705",
      "total_costs": "2500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "107",
      "driver_code": "DRIVER007",
      "shipment_no": "SHIPMENT770",
      "total_costs": "3500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "108",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT311",
      "total_costs": "8700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "109",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT904",
      "total_costs": "8400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "110",
      "driver_code": "DRIVER007",
      "shipment_no": "SHIPMENT577",
      "total_costs": "9400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "111",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT227",
      "total_costs": "5900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "112",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT963",
      "total_costs": "500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "113",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT034",
      "total_costs": "7700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "114",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT307",
      "total_costs": "5700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "115",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT121",
      "total_costs": "4700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "116",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT919",
      "total_costs": "4200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "117",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT679",
      "total_costs": "1600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "118",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT388",
      "total_costs": "3000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "119",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT677",
      "total_costs": "5600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "120",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT611",
      "total_costs": "2700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "121",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT459",
      "total_costs": "9200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "122",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT372",
      "total_costs": "9400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "123",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT545",
      "total_costs": "8600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "124",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT698",
      "total_costs": "4300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "125",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT711",
      "total_costs": "8500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "126",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT202",
      "total_costs": "4500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "127",
      "driver_code": "DRIVER007",
      "shipment_no": "SHIPMENT365",
      "total_costs": "7400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "128",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT958",
      "total_costs": "8900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "129",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT129",
      "total_costs": "1600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "130",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT085",
      "total_costs": "2100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "131",
      "driver_code": "DRIVER011",
      "shipment_no": "SHIPMENT810",
      "total_costs": "2200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "132",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT962",
      "total_costs": "6200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "133",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT227",
      "total_costs": "4400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "134",
      "driver_code": "DRIVER021",
      "shipment_no": "SHIPMENT937",
      "total_costs": "8300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "135",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT376",
      "total_costs": "800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "136",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT156",
      "total_costs": "800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "137",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT818",
      "total_costs": "9400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "138",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT709",
      "total_costs": "5900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "139",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT622",
      "total_costs": "9800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "140",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT595",
      "total_costs": "3500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "141",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT361",
      "total_costs": "5600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "142",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT021",
      "total_costs": "3300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "143",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT242",
      "total_costs": "6100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "144",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT665",
      "total_costs": "1500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "145",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT595",
      "total_costs": "2400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "146",
      "driver_code": "DRIVER009",
      "shipment_no": "SHIPMENT542",
      "total_costs": "1200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "147",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT342",
      "total_costs": "5500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "148",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT083",
      "total_costs": "2300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "149",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT605",
      "total_costs": "8300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "150",
      "driver_code": "DRIVER021",
      "shipment_no": "SHIPMENT669",
      "total_costs": "3800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "151",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT471",
      "total_costs": "5200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "152",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT135",
      "total_costs": "1100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "153",
      "driver_code": "DRIVER021",
      "shipment_no": "SHIPMENT219",
      "total_costs": "7900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "154",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT608",
      "total_costs": "1800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "155",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT290",
      "total_costs": "1000000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "156",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT112",
      "total_costs": "6700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "157",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT234",
      "total_costs": "500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "158",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT292",
      "total_costs": "2100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "159",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT913",
      "total_costs": "700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "160",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT892",
      "total_costs": "9300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "161",
      "driver_code": "DRIVER014",
      "shipment_no": "SHIPMENT926",
      "total_costs": "8300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "162",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT755",
      "total_costs": "4500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "163",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT059",
      "total_costs": "6300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "164",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT421",
      "total_costs": "7100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "165",
      "driver_code": "DRIVER007",
      "shipment_no": "SHIPMENT834",
      "total_costs": "7400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "166",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT166",
      "total_costs": "7300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "167",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT989",
      "total_costs": "600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "168",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT959",
      "total_costs": "6300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "169",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT951",
      "total_costs": "5400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "170",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT606",
      "total_costs": "3300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "171",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT804",
      "total_costs": "5100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "172",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT395",
      "total_costs": "4000000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "173",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT820",
      "total_costs": "6400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "174",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT049",
      "total_costs": "4500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "175",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT759",
      "total_costs": "400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "176",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT686",
      "total_costs": "8900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "177",
      "driver_code": "DRIVER014",
      "shipment_no": "SHIPMENT274",
      "total_costs": "2300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "178",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT751",
      "total_costs": "7900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "179",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT685",
      "total_costs": "2900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "180",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT600",
      "total_costs": "2400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "181",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT887",
      "total_costs": "3100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "182",
      "driver_code": "DRIVER009",
      "shipment_no": "SHIPMENT534",
      "total_costs": "7900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "183",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT108",
      "total_costs": "3400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "184",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT438",
      "total_costs": "2500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "185",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT334",
      "total_costs": "5500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "186",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT375",
      "total_costs": "8400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "188",
      "driver_code": "DRIVER014",
      "shipment_no": "SHIPMENT040",
      "total_costs": "4000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "189",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT473",
      "total_costs": "4200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "190",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT724",
      "total_costs": "9800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "191",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT358",
      "total_costs": "6000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "192",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT067",
      "total_costs": "2300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "193",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT776",
      "total_costs": "1200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "194",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT627",
      "total_costs": "4400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "195",
      "driver_code": "DRIVER007",
      "shipment_no": "SHIPMENT961",
      "total_costs": "1300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "196",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT826",
      "total_costs": "9100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "197",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT500",
      "total_costs": "2000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "198",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT245",
      "total_costs": "4100000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "199",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT872",
      "total_costs": "6700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "200",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT057",
      "total_costs": "9100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "201",
      "driver_code": "DRIVER009",
      "shipment_no": "SHIPMENT576",
      "total_costs": "8900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "202",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT199",
      "total_costs": "2000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "203",
      "driver_code": "DRIVER011",
      "shipment_no": "SHIPMENT318",
      "total_costs": "2000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "204",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT601",
      "total_costs": "2300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "205",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT244",
      "total_costs": "8400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "206",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT005",
      "total_costs": "3100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "207",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT728",
      "total_costs": "7300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "208",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT395",
      "total_costs": "9600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "209",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT739",
      "total_costs": "6400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "210",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT584",
      "total_costs": "7700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "211",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT116",
      "total_costs": "500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "212",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT914",
      "total_costs": "8800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "213",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT370",
      "total_costs": "6100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "214",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT959",
      "total_costs": "6500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "215",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT236",
      "total_costs": "7800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "216",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT510",
      "total_costs": "9900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "217",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT341",
      "total_costs": "2600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "218",
      "driver_code": "DRIVER021",
      "shipment_no": "SHIPMENT906",
      "total_costs": "400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "219",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT722",
      "total_costs": "7000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "220",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT319",
      "total_costs": "4200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "221",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT731",
      "total_costs": "1100000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "222",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT047",
      "total_costs": "7700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "223",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT113",
      "total_costs": "2800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "224",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT207",
      "total_costs": "400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "225",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT128",
      "total_costs": "1600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "226",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT482",
      "total_costs": "9200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "227",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT017",
      "total_costs": "6900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "228",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT305",
      "total_costs": "6300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "229",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT205",
      "total_costs": "6100000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "230",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT308",
      "total_costs": "2800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "349",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT694",
      "total_costs": "3100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "231",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT151",
      "total_costs": "8700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "232",
      "driver_code": "DRIVER021",
      "shipment_no": "SHIPMENT652",
      "total_costs": "700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "233",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT185",
      "total_costs": "5300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "234",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT127",
      "total_costs": "1700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "235",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT042",
      "total_costs": "8300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "236",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT953",
      "total_costs": "2100000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "237",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT077",
      "total_costs": "300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "238",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT273",
      "total_costs": "2700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "239",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT379",
      "total_costs": "1200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "240",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT958",
      "total_costs": "5400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "241",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT856",
      "total_costs": "4200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "242",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT567",
      "total_costs": "4800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "243",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT564",
      "total_costs": "8300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "244",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT859",
      "total_costs": "1300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "245",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT977",
      "total_costs": "9500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "246",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT806",
      "total_costs": "3000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "247",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT423",
      "total_costs": "7100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "248",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT515",
      "total_costs": "4500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "249",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT108",
      "total_costs": "9200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "250",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT521",
      "total_costs": "3400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "251",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT030",
      "total_costs": "5700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "252",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT623",
      "total_costs": "1400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "253",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT231",
      "total_costs": "1800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "254",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT056",
      "total_costs": "3800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "255",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT643",
      "total_costs": "9100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "256",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT559",
      "total_costs": "8900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "257",
      "driver_code": "DRIVER011",
      "shipment_no": "SHIPMENT013",
      "total_costs": "6500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "258",
      "driver_code": "DRIVER007",
      "shipment_no": "SHIPMENT430",
      "total_costs": "2800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "259",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT178",
      "total_costs": "7100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "260",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT867",
      "total_costs": "9300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "261",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT283",
      "total_costs": "2400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "262",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT663",
      "total_costs": "8400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "263",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT673",
      "total_costs": "2900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "264",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT935",
      "total_costs": "6100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "265",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT490",
      "total_costs": "7400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "266",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT674",
      "total_costs": "100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "267",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT921",
      "total_costs": "9700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "268",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT179",
      "total_costs": "4400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "270",
      "driver_code": "DRIVER009",
      "shipment_no": "SHIPMENT415",
      "total_costs": "700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "271",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT834",
      "total_costs": "5900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "272",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT426",
      "total_costs": "8700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "273",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT558",
      "total_costs": "7200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "274",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT440",
      "total_costs": "7500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "275",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT330",
      "total_costs": "6400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "276",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT908",
      "total_costs": "7000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "277",
      "driver_code": "DRIVER011",
      "shipment_no": "SHIPMENT841",
      "total_costs": "100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "278",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT396",
      "total_costs": "3800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "279",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT404",
      "total_costs": "7200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "280",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT633",
      "total_costs": "6200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "281",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT690",
      "total_costs": "6800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "283",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT391",
      "total_costs": "5500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "284",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT764",
      "total_costs": "6100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "285",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT583",
      "total_costs": "7400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "286",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT717",
      "total_costs": "3000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "287",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT099",
      "total_costs": "8600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "288",
      "driver_code": "DRIVER011",
      "shipment_no": "SHIPMENT719",
      "total_costs": "7100000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "289",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT073",
      "total_costs": "8300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "290",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT505",
      "total_costs": "9800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "291",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT373",
      "total_costs": "9700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "292",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT586",
      "total_costs": "5800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "293",
      "driver_code": "DRIVER011",
      "shipment_no": "SHIPMENT231",
      "total_costs": "2100000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "294",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT150",
      "total_costs": "6400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "295",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT161",
      "total_costs": "9100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "296",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT005",
      "total_costs": "4700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "297",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT386",
      "total_costs": "700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "298",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT304",
      "total_costs": "1000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "299",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT847",
      "total_costs": "6900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "300",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT345",
      "total_costs": "1800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "301",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT529",
      "total_costs": "0.00",
      "cost_status": "PAID"
    },
    {
      "id": "302",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT501",
      "total_costs": "9200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "303",
      "driver_code": "DRIVER009",
      "shipment_no": "SHIPMENT777",
      "total_costs": "8200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "304",
      "driver_code": "DRIVER014",
      "shipment_no": "SHIPMENT518",
      "total_costs": "5100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "305",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT894",
      "total_costs": "4800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "306",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT440",
      "total_costs": "8500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "307",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT995",
      "total_costs": "2300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "308",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT956",
      "total_costs": "6100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "310",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT211",
      "total_costs": "8700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "311",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT722",
      "total_costs": "9400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "312",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT977",
      "total_costs": "1700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "313",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT071",
      "total_costs": "7000000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "314",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT297",
      "total_costs": "4500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "315",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT102",
      "total_costs": "3800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "316",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT407",
      "total_costs": "5900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "317",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT336",
      "total_costs": "8000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "318",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT566",
      "total_costs": "3400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "319",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT987",
      "total_costs": "2000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "320",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT851",
      "total_costs": "8300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "321",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT817",
      "total_costs": "3400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "322",
      "driver_code": "DRIVER014",
      "shipment_no": "SHIPMENT584",
      "total_costs": "800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "323",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT933",
      "total_costs": "1600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "324",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT178",
      "total_costs": "2300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "325",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT803",
      "total_costs": "8300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "326",
      "driver_code": "DRIVER007",
      "shipment_no": "SHIPMENT908",
      "total_costs": "9600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "327",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT160",
      "total_costs": "200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "328",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT221",
      "total_costs": "6700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "329",
      "driver_code": "DRIVER011",
      "shipment_no": "SHIPMENT785",
      "total_costs": "3900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "330",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT650",
      "total_costs": "7000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "331",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT202",
      "total_costs": "2300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "332",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT019",
      "total_costs": "3900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "333",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT072",
      "total_costs": "1900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "334",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT941",
      "total_costs": "600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "335",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT051",
      "total_costs": "5400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "336",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT215",
      "total_costs": "600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "337",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT582",
      "total_costs": "2000000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "338",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT976",
      "total_costs": "9600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "339",
      "driver_code": "DRIVER007",
      "shipment_no": "SHIPMENT177",
      "total_costs": "5900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "340",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT556",
      "total_costs": "700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "341",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT488",
      "total_costs": "7600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "342",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT418",
      "total_costs": "4600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "343",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT758",
      "total_costs": "4900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "344",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT932",
      "total_costs": "1200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "345",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT882",
      "total_costs": "1400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "346",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT067",
      "total_costs": "7700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "347",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT516",
      "total_costs": "0.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "348",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT736",
      "total_costs": "3100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "350",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT190",
      "total_costs": "4600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "351",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT882",
      "total_costs": "1700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "352",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT544",
      "total_costs": "5500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "353",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT685",
      "total_costs": "1300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "354",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT272",
      "total_costs": "3500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "355",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT374",
      "total_costs": "200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "356",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT134",
      "total_costs": "1100000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "357",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT172",
      "total_costs": "7400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "358",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT343",
      "total_costs": "8500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "359",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT980",
      "total_costs": "5900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "360",
      "driver_code": "DRIVER011",
      "shipment_no": "SHIPMENT018",
      "total_costs": "4700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "361",
      "driver_code": "DRIVER014",
      "shipment_no": "SHIPMENT119",
      "total_costs": "9700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "362",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT948",
      "total_costs": "3400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "363",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT989",
      "total_costs": "1700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "364",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT068",
      "total_costs": "4300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "365",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT453",
      "total_costs": "3100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "366",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT358",
      "total_costs": "500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "367",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT434",
      "total_costs": "1400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "368",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT743",
      "total_costs": "1400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "369",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT607",
      "total_costs": "500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "370",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT132",
      "total_costs": "9000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "371",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT825",
      "total_costs": "9600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "372",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT870",
      "total_costs": "700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "373",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT929",
      "total_costs": "8500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "374",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT330",
      "total_costs": "2900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "375",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT531",
      "total_costs": "5000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "376",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT867",
      "total_costs": "5800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "377",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT893",
      "total_costs": "4800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "378",
      "driver_code": "DRIVER021",
      "shipment_no": "SHIPMENT607",
      "total_costs": "1600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "379",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT160",
      "total_costs": "2900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "380",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT640",
      "total_costs": "8900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "381",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT181",
      "total_costs": "2900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "382",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT453",
      "total_costs": "3500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "383",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT020",
      "total_costs": "100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "384",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT646",
      "total_costs": "5500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "385",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT966",
      "total_costs": "6700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "386",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT583",
      "total_costs": "8200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "387",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT191",
      "total_costs": "1800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "388",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT165",
      "total_costs": "5700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "389",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT317",
      "total_costs": "3000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "390",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT867",
      "total_costs": "4700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "391",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT687",
      "total_costs": "1100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "392",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT957",
      "total_costs": "7100000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "393",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT079",
      "total_costs": "4000000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "394",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT556",
      "total_costs": "0.00",
      "cost_status": "PENDING"
    },
    {
      "id": "395",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT137",
      "total_costs": "3400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "396",
      "driver_code": "DRIVER009",
      "shipment_no": "SHIPMENT284",
      "total_costs": "9500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "397",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT649",
      "total_costs": "9300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "398",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT106",
      "total_costs": "6300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "399",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT212",
      "total_costs": "4200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "400",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT341",
      "total_costs": "6800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "401",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT494",
      "total_costs": "5200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "402",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT846",
      "total_costs": "8200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "403",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT035",
      "total_costs": "4200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "404",
      "driver_code": "DRIVER011",
      "shipment_no": "SHIPMENT261",
      "total_costs": "5300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "405",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT022",
      "total_costs": "7300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "406",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT944",
      "total_costs": "9700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "407",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT516",
      "total_costs": "6600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "408",
      "driver_code": "DRIVER009",
      "shipment_no": "SHIPMENT171",
      "total_costs": "1300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "409",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT605",
      "total_costs": "3800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "410",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT816",
      "total_costs": "1900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "411",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT991",
      "total_costs": "1100000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "412",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT356",
      "total_costs": "9800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "413",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT165",
      "total_costs": "9100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "414",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT025",
      "total_costs": "8600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "415",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT918",
      "total_costs": "8300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "416",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT711",
      "total_costs": "9900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "417",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT922",
      "total_costs": "7200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "418",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT161",
      "total_costs": "1100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "419",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT369",
      "total_costs": "3300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "420",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT905",
      "total_costs": "3200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "421",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT633",
      "total_costs": "6900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "422",
      "driver_code": "DRIVER007",
      "shipment_no": "SHIPMENT977",
      "total_costs": "500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "423",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT379",
      "total_costs": "9400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "424",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT528",
      "total_costs": "3200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "425",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT650",
      "total_costs": "900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "426",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT527",
      "total_costs": "3000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "427",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT651",
      "total_costs": "7600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "428",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT007",
      "total_costs": "3700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "429",
      "driver_code": "DRIVER014",
      "shipment_no": "SHIPMENT576",
      "total_costs": "5200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "430",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT937",
      "total_costs": "1800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "431",
      "driver_code": "DRIVER007",
      "shipment_no": "SHIPMENT537",
      "total_costs": "4100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "432",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT555",
      "total_costs": "7200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "433",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT433",
      "total_costs": "6000000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "434",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT450",
      "total_costs": "500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "435",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT215",
      "total_costs": "700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "436",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT894",
      "total_costs": "8700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "437",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT800",
      "total_costs": "6800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "438",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT936",
      "total_costs": "2500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "439",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT648",
      "total_costs": "7800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "440",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT806",
      "total_costs": "1300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "441",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT605",
      "total_costs": "600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "442",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT803",
      "total_costs": "6600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "444",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT043",
      "total_costs": "4500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "445",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT564",
      "total_costs": "5000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "446",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT719",
      "total_costs": "7500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "447",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT633",
      "total_costs": "8400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "448",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT210",
      "total_costs": "4400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "449",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT231",
      "total_costs": "9100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "450",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT760",
      "total_costs": "3100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "451",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT504",
      "total_costs": "8300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "452",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT521",
      "total_costs": "6100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "453",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT180",
      "total_costs": "1900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "454",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT498",
      "total_costs": "7200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "455",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT581",
      "total_costs": "8100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "456",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT638",
      "total_costs": "2700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "457",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT591",
      "total_costs": "5700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "458",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT586",
      "total_costs": "9700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "459",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT747",
      "total_costs": "300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "460",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT672",
      "total_costs": "600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "461",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT867",
      "total_costs": "7500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "462",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT674",
      "total_costs": "2400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "463",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT804",
      "total_costs": "1400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "464",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT888",
      "total_costs": "7300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "465",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT930",
      "total_costs": "6300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "466",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT260",
      "total_costs": "4300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "467",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT946",
      "total_costs": "9900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "468",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT727",
      "total_costs": "8900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "469",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT453",
      "total_costs": "0.00",
      "cost_status": "PAID"
    },
    {
      "id": "470",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT032",
      "total_costs": "9700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "471",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT189",
      "total_costs": "8600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "472",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT003",
      "total_costs": "8300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "473",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT719",
      "total_costs": "700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "474",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT298",
      "total_costs": "9800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "475",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT384",
      "total_costs": "7000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "476",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT970",
      "total_costs": "7300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "477",
      "driver_code": "DRIVER014",
      "shipment_no": "SHIPMENT642",
      "total_costs": "7200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "478",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT680",
      "total_costs": "4500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "479",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT420",
      "total_costs": "3500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "480",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT935",
      "total_costs": "900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "481",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT983",
      "total_costs": "2400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "482",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT376",
      "total_costs": "6800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "483",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT828",
      "total_costs": "9700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "484",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT671",
      "total_costs": "2100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "485",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT041",
      "total_costs": "3900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "486",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT749",
      "total_costs": "1000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "487",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT256",
      "total_costs": "400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "488",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT764",
      "total_costs": "1900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "489",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT856",
      "total_costs": "8700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "490",
      "driver_code": "DRIVER014",
      "shipment_no": "SHIPMENT582",
      "total_costs": "1100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "491",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT286",
      "total_costs": "3600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "492",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT098",
      "total_costs": "9100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "493",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT952",
      "total_costs": "500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "494",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT304",
      "total_costs": "400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "495",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT992",
      "total_costs": "7100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "496",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT356",
      "total_costs": "2100000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "497",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT342",
      "total_costs": "5600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "498",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT984",
      "total_costs": "3300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "499",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT955",
      "total_costs": "5000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "500",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT597",
      "total_costs": "9400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "501",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT975",
      "total_costs": "9100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "502",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT825",
      "total_costs": "6300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "503",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT278",
      "total_costs": "600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "504",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT877",
      "total_costs": "2300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "505",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT425",
      "total_costs": "3900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "506",
      "driver_code": "DRIVER011",
      "shipment_no": "SHIPMENT790",
      "total_costs": "9800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "507",
      "driver_code": "DRIVER021",
      "shipment_no": "SHIPMENT609",
      "total_costs": "4000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "508",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT664",
      "total_costs": "7000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "509",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT139",
      "total_costs": "4900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "510",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT726",
      "total_costs": "9400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "511",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT167",
      "total_costs": "5800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "512",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT304",
      "total_costs": "8000000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "513",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT891",
      "total_costs": "7800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "514",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT429",
      "total_costs": "4200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "515",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT095",
      "total_costs": "3800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "516",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT834",
      "total_costs": "5600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "517",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT113",
      "total_costs": "3900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "518",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT772",
      "total_costs": "6200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "519",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT374",
      "total_costs": "3400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "520",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT714",
      "total_costs": "9200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "521",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT389",
      "total_costs": "800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "522",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT622",
      "total_costs": "0.00",
      "cost_status": "PENDING"
    },
    {
      "id": "523",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT669",
      "total_costs": "1700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "524",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT566",
      "total_costs": "4700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "525",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT252",
      "total_costs": "800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "526",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT304",
      "total_costs": "9700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "527",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT405",
      "total_costs": "100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "528",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT273",
      "total_costs": "6100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "529",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT481",
      "total_costs": "9600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "530",
      "driver_code": "DRIVER009",
      "shipment_no": "SHIPMENT370",
      "total_costs": "4100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "531",
      "driver_code": "DRIVER021",
      "shipment_no": "SHIPMENT881",
      "total_costs": "7100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "532",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT348",
      "total_costs": "6400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "533",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT515",
      "total_costs": "600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "534",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT493",
      "total_costs": "8400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "535",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT797",
      "total_costs": "6100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "536",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT679",
      "total_costs": "4600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "537",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT550",
      "total_costs": "6100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "538",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT550",
      "total_costs": "8500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "539",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT145",
      "total_costs": "9700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "540",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT317",
      "total_costs": "8200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "541",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT276",
      "total_costs": "1300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "542",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT249",
      "total_costs": "5300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "543",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT881",
      "total_costs": "4100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "544",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT174",
      "total_costs": "7600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "545",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT322",
      "total_costs": "4800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "546",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT923",
      "total_costs": "7700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "548",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT707",
      "total_costs": "7200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "549",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT254",
      "total_costs": "2000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "550",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT333",
      "total_costs": "2800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "551",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT855",
      "total_costs": "8700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "552",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT086",
      "total_costs": "4800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "553",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT650",
      "total_costs": "8700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "554",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT136",
      "total_costs": "8300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "555",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT628",
      "total_costs": "3400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "556",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT301",
      "total_costs": "0.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "557",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT001",
      "total_costs": "8800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "558",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT782",
      "total_costs": "9200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "559",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT824",
      "total_costs": "2900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "560",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT392",
      "total_costs": "2300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "561",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT912",
      "total_costs": "5300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "563",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT174",
      "total_costs": "1400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "564",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT334",
      "total_costs": "400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "565",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT195",
      "total_costs": "8800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "566",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT300",
      "total_costs": "1800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "567",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT787",
      "total_costs": "2500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "568",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT945",
      "total_costs": "2600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "569",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT732",
      "total_costs": "5500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "570",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT366",
      "total_costs": "5500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "571",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT257",
      "total_costs": "3700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "572",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT332",
      "total_costs": "9700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "573",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT005",
      "total_costs": "3600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "574",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT736",
      "total_costs": "5300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "575",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT145",
      "total_costs": "1000000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "576",
      "driver_code": "DRIVER014",
      "shipment_no": "SHIPMENT141",
      "total_costs": "7700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "577",
      "driver_code": "DRIVER007",
      "shipment_no": "SHIPMENT645",
      "total_costs": "4900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "578",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT116",
      "total_costs": "6900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "579",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT259",
      "total_costs": "5800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "580",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT835",
      "total_costs": "8100000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "581",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT003",
      "total_costs": "1200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "582",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT740",
      "total_costs": "4800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "583",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT835",
      "total_costs": "9500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "584",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT435",
      "total_costs": "9700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "585",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT192",
      "total_costs": "9500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "586",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT549",
      "total_costs": "600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "587",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT918",
      "total_costs": "1300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "588",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT334",
      "total_costs": "4100000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "589",
      "driver_code": "DRIVER007",
      "shipment_no": "SHIPMENT413",
      "total_costs": "8600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "590",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT400",
      "total_costs": "2400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "591",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT771",
      "total_costs": "6100000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "592",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT213",
      "total_costs": "600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "593",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT204",
      "total_costs": "1200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "594",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT344",
      "total_costs": "4600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "595",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT984",
      "total_costs": "1900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "596",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT670",
      "total_costs": "3100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "597",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT378",
      "total_costs": "3400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "598",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT677",
      "total_costs": "4800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "599",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT197",
      "total_costs": "2800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "600",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT697",
      "total_costs": "300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "601",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT757",
      "total_costs": "3800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "602",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT788",
      "total_costs": "7800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "603",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT301",
      "total_costs": "4000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "604",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT956",
      "total_costs": "7800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "605",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT552",
      "total_costs": "2000000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "606",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT937",
      "total_costs": "4900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "607",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT907",
      "total_costs": "200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "608",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT268",
      "total_costs": "8200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "609",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT378",
      "total_costs": "7200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "610",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT076",
      "total_costs": "9400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "611",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT509",
      "total_costs": "4200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "612",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT016",
      "total_costs": "600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "613",
      "driver_code": "DRIVER009",
      "shipment_no": "SHIPMENT449",
      "total_costs": "5100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "614",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT825",
      "total_costs": "2900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "615",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT350",
      "total_costs": "8000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "616",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT589",
      "total_costs": "4800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "617",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT128",
      "total_costs": "1800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "618",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT024",
      "total_costs": "0.00",
      "cost_status": "PENDING"
    },
    {
      "id": "619",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT742",
      "total_costs": "300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "620",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT358",
      "total_costs": "6900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "621",
      "driver_code": "DRIVER011",
      "shipment_no": "SHIPMENT387",
      "total_costs": "3800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "622",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT019",
      "total_costs": "5800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "623",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT029",
      "total_costs": "3900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "624",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT389",
      "total_costs": "6600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "625",
      "driver_code": "DRIVER021",
      "shipment_no": "SHIPMENT637",
      "total_costs": "7400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "626",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT253",
      "total_costs": "7200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "627",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT080",
      "total_costs": "1300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "628",
      "driver_code": "DRIVER014",
      "shipment_no": "SHIPMENT623",
      "total_costs": "2900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "629",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT269",
      "total_costs": "6400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "630",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT251",
      "total_costs": "100000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "631",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT478",
      "total_costs": "6900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "632",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT186",
      "total_costs": "7400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "633",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT962",
      "total_costs": "4600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "634",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT771",
      "total_costs": "4700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "635",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT422",
      "total_costs": "800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "636",
      "driver_code": "DRIVER021",
      "shipment_no": "SHIPMENT098",
      "total_costs": "7900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "637",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT483",
      "total_costs": "1000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "638",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT625",
      "total_costs": "8800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "639",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT556",
      "total_costs": "6300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "640",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT968",
      "total_costs": "3400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "641",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT992",
      "total_costs": "3900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "642",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT743",
      "total_costs": "2700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "643",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT081",
      "total_costs": "3700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "644",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT841",
      "total_costs": "1200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "645",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT965",
      "total_costs": "3300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "646",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT440",
      "total_costs": "7100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "647",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT055",
      "total_costs": "1800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "648",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT885",
      "total_costs": "7400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "649",
      "driver_code": "DRIVER007",
      "shipment_no": "SHIPMENT604",
      "total_costs": "5300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "650",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT168",
      "total_costs": "7000000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "651",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT662",
      "total_costs": "6600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "652",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT676",
      "total_costs": "4900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "653",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT427",
      "total_costs": "1800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "654",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT090",
      "total_costs": "400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "655",
      "driver_code": "DRIVER009",
      "shipment_no": "SHIPMENT970",
      "total_costs": "300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "656",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT853",
      "total_costs": "7300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "658",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT792",
      "total_costs": "300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "659",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT907",
      "total_costs": "1000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "660",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT451",
      "total_costs": "3300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "661",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT934",
      "total_costs": "6300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "662",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT537",
      "total_costs": "7600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "663",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT524",
      "total_costs": "1800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "664",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT680",
      "total_costs": "8100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "665",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT454",
      "total_costs": "1600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "666",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT054",
      "total_costs": "2900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "667",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT212",
      "total_costs": "8300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "668",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT882",
      "total_costs": "1200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "669",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT827",
      "total_costs": "5900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "670",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT138",
      "total_costs": "3500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "671",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT674",
      "total_costs": "5600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "672",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT145",
      "total_costs": "5400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "673",
      "driver_code": "DRIVER014",
      "shipment_no": "SHIPMENT199",
      "total_costs": "8100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "674",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT485",
      "total_costs": "900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "675",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT803",
      "total_costs": "8700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "676",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT301",
      "total_costs": "6700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "677",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT695",
      "total_costs": "3200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "678",
      "driver_code": "DRIVER007",
      "shipment_no": "SHIPMENT240",
      "total_costs": "1000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "679",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT637",
      "total_costs": "5900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "680",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT168",
      "total_costs": "6800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "681",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT931",
      "total_costs": "6000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "682",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT372",
      "total_costs": "9400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "683",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT835",
      "total_costs": "5500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "684",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT663",
      "total_costs": "3600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "685",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT896",
      "total_costs": "3300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "686",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT617",
      "total_costs": "8500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "687",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT937",
      "total_costs": "8500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "688",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT372",
      "total_costs": "8900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "689",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT317",
      "total_costs": "700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "690",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT552",
      "total_costs": "9000000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "691",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT759",
      "total_costs": "3800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "692",
      "driver_code": "DRIVER009",
      "shipment_no": "SHIPMENT073",
      "total_costs": "8400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "693",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT557",
      "total_costs": "7000000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "694",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT194",
      "total_costs": "5200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "695",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT602",
      "total_costs": "3600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "696",
      "driver_code": "DRIVER021",
      "shipment_no": "SHIPMENT381",
      "total_costs": "7100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "697",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT279",
      "total_costs": "2500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "698",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT330",
      "total_costs": "9500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "699",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT102",
      "total_costs": "5800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "700",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT734",
      "total_costs": "4000000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "701",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT238",
      "total_costs": "9500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "702",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT647",
      "total_costs": "9100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "703",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT180",
      "total_costs": "6300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "704",
      "driver_code": "DRIVER007",
      "shipment_no": "SHIPMENT143",
      "total_costs": "6200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "705",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT495",
      "total_costs": "3000000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "706",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT571",
      "total_costs": "800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "707",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT092",
      "total_costs": "7800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "708",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT033",
      "total_costs": "6700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "709",
      "driver_code": "DRIVER014",
      "shipment_no": "SHIPMENT456",
      "total_costs": "800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "710",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT719",
      "total_costs": "2700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "711",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT213",
      "total_costs": "8800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "712",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT466",
      "total_costs": "3400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "713",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT450",
      "total_costs": "9600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "714",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT405",
      "total_costs": "6900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "715",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT895",
      "total_costs": "4300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "716",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT453",
      "total_costs": "6600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "717",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT222",
      "total_costs": "3400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "718",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT304",
      "total_costs": "9900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "719",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT135",
      "total_costs": "5900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "720",
      "driver_code": "DRIVER014",
      "shipment_no": "SHIPMENT921",
      "total_costs": "9300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "722",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT013",
      "total_costs": "2600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "723",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT934",
      "total_costs": "7500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "724",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT212",
      "total_costs": "6000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "725",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT124",
      "total_costs": "2400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "726",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT973",
      "total_costs": "4500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "727",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT139",
      "total_costs": "6000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "728",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT890",
      "total_costs": "3300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "729",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT568",
      "total_costs": "3600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "730",
      "driver_code": "DRIVER009",
      "shipment_no": "SHIPMENT836",
      "total_costs": "9800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "731",
      "driver_code": "DRIVER011",
      "shipment_no": "SHIPMENT726",
      "total_costs": "9800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "732",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT745",
      "total_costs": "7400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "733",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT342",
      "total_costs": "4400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "734",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT765",
      "total_costs": "6300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "735",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT747",
      "total_costs": "5300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "736",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT064",
      "total_costs": "1600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "737",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT074",
      "total_costs": "4500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "738",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT585",
      "total_costs": "4100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "739",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT757",
      "total_costs": "1800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "740",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT978",
      "total_costs": "9900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "741",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT165",
      "total_costs": "2600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "742",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT453",
      "total_costs": "9600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "743",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT031",
      "total_costs": "2500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "744",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT583",
      "total_costs": "4700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "745",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT359",
      "total_costs": "800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "746",
      "driver_code": "DRIVER021",
      "shipment_no": "SHIPMENT489",
      "total_costs": "6900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "747",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT312",
      "total_costs": "5400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "748",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT638",
      "total_costs": "2000000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "749",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT693",
      "total_costs": "7200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "750",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT288",
      "total_costs": "6500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "751",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT706",
      "total_costs": "3000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "752",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT240",
      "total_costs": "8700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "753",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT996",
      "total_costs": "2100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "754",
      "driver_code": "DRIVER009",
      "shipment_no": "SHIPMENT639",
      "total_costs": "8500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "755",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT345",
      "total_costs": "4700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "756",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT264",
      "total_costs": "7400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "757",
      "driver_code": "DRIVER011",
      "shipment_no": "SHIPMENT087",
      "total_costs": "8200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "758",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT024",
      "total_costs": "4600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "759",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT473",
      "total_costs": "8300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "760",
      "driver_code": "DRIVER021",
      "shipment_no": "SHIPMENT636",
      "total_costs": "7600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "761",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT268",
      "total_costs": "8100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "762",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT997",
      "total_costs": "6200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "763",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT089",
      "total_costs": "9500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "764",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT832",
      "total_costs": "5500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "765",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT979",
      "total_costs": "7900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "766",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT967",
      "total_costs": "9400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "767",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT129",
      "total_costs": "2100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "768",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT137",
      "total_costs": "7900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "769",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT770",
      "total_costs": "3600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "770",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT737",
      "total_costs": "7500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "771",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT752",
      "total_costs": "7100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "772",
      "driver_code": "DRIVER009",
      "shipment_no": "SHIPMENT491",
      "total_costs": "9600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "773",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT058",
      "total_costs": "4800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "774",
      "driver_code": "DRIVER011",
      "shipment_no": "SHIPMENT676",
      "total_costs": "4200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "775",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT177",
      "total_costs": "4700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "776",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT010",
      "total_costs": "3600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "777",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT559",
      "total_costs": "5500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "778",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT117",
      "total_costs": "1000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "779",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT068",
      "total_costs": "8700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "780",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT634",
      "total_costs": "2000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "781",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT840",
      "total_costs": "6400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "782",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT182",
      "total_costs": "2700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "783",
      "driver_code": "DRIVER007",
      "shipment_no": "SHIPMENT239",
      "total_costs": "7000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "784",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT046",
      "total_costs": "1000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "785",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT606",
      "total_costs": "2300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "786",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT913",
      "total_costs": "1300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "787",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT268",
      "total_costs": "4300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "788",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT071",
      "total_costs": "7600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "789",
      "driver_code": "DRIVER014",
      "shipment_no": "SHIPMENT273",
      "total_costs": "5400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "790",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT605",
      "total_costs": "700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "791",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT431",
      "total_costs": "4200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "792",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT319",
      "total_costs": "8400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "793",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT808",
      "total_costs": "5300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "794",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT992",
      "total_costs": "2300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "795",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT512",
      "total_costs": "5400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "796",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT458",
      "total_costs": "1200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "797",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT418",
      "total_costs": "9200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "798",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT163",
      "total_costs": "7500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "799",
      "driver_code": "DRIVER007",
      "shipment_no": "SHIPMENT132",
      "total_costs": "5500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "800",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT191",
      "total_costs": "1100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "801",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT161",
      "total_costs": "5700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "802",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT988",
      "total_costs": "5100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "803",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT918",
      "total_costs": "4600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "804",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT381",
      "total_costs": "5100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "805",
      "driver_code": "DRIVER021",
      "shipment_no": "SHIPMENT577",
      "total_costs": "4000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "806",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT480",
      "total_costs": "6200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "807",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT082",
      "total_costs": "2400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "808",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT728",
      "total_costs": "9400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "809",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT763",
      "total_costs": "2200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "810",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT639",
      "total_costs": "3400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "811",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT312",
      "total_costs": "2500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "812",
      "driver_code": "DRIVER014",
      "shipment_no": "SHIPMENT548",
      "total_costs": "9900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "813",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT896",
      "total_costs": "9900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "814",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT628",
      "total_costs": "9600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "815",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT196",
      "total_costs": "8100000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "816",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT603",
      "total_costs": "5000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "817",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT664",
      "total_costs": "9100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "818",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT331",
      "total_costs": "8100000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "819",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT058",
      "total_costs": "8500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "820",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT403",
      "total_costs": "6800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "821",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT658",
      "total_costs": "5100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "822",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT186",
      "total_costs": "2200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "823",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT030",
      "total_costs": "1200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "824",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT678",
      "total_costs": "5400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "825",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT263",
      "total_costs": "3300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "827",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT973",
      "total_costs": "5900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "828",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT252",
      "total_costs": "9300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "829",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT012",
      "total_costs": "400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "830",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT987",
      "total_costs": "3400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "831",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT518",
      "total_costs": "7200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "832",
      "driver_code": "DRIVER009",
      "shipment_no": "SHIPMENT328",
      "total_costs": "3000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "833",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT717",
      "total_costs": "300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "834",
      "driver_code": "DRIVER014",
      "shipment_no": "SHIPMENT552",
      "total_costs": "6700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "835",
      "driver_code": "DRIVER014",
      "shipment_no": "SHIPMENT337",
      "total_costs": "3200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "836",
      "driver_code": "DRIVER021",
      "shipment_no": "SHIPMENT654",
      "total_costs": "3800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "837",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT343",
      "total_costs": "1700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "838",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT401",
      "total_costs": "4300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "839",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT592",
      "total_costs": "5300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "840",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT536",
      "total_costs": "5100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "841",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT217",
      "total_costs": "5300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "842",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT828",
      "total_costs": "4300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "843",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT062",
      "total_costs": "2500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "844",
      "driver_code": "DRIVER011",
      "shipment_no": "SHIPMENT665",
      "total_costs": "9600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "846",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT679",
      "total_costs": "6400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "847",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT105",
      "total_costs": "4900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "848",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT258",
      "total_costs": "6000000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "849",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT140",
      "total_costs": "3800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "850",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT544",
      "total_costs": "9000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "851",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT787",
      "total_costs": "5000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "852",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT421",
      "total_costs": "500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "853",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT057",
      "total_costs": "5500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "854",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT645",
      "total_costs": "500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "855",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT730",
      "total_costs": "1500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "856",
      "driver_code": "DRIVER007",
      "shipment_no": "SHIPMENT662",
      "total_costs": "6500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "857",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT069",
      "total_costs": "8600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "858",
      "driver_code": "DRIVER021",
      "shipment_no": "SHIPMENT971",
      "total_costs": "3100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "859",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT353",
      "total_costs": "2300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "860",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT521",
      "total_costs": "8400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "861",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT624",
      "total_costs": "3500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "862",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT143",
      "total_costs": "8600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "864",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT701",
      "total_costs": "6800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "865",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT925",
      "total_costs": "8500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "866",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT735",
      "total_costs": "6700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "867",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT663",
      "total_costs": "9000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "868",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT371",
      "total_costs": "7600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "869",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT930",
      "total_costs": "7500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "870",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT910",
      "total_costs": "8900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "871",
      "driver_code": "DRIVER014",
      "shipment_no": "SHIPMENT191",
      "total_costs": "100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "872",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT150",
      "total_costs": "2300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "873",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT319",
      "total_costs": "5100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "874",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT190",
      "total_costs": "8900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "875",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT677",
      "total_costs": "600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "876",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT824",
      "total_costs": "6500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "877",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT226",
      "total_costs": "9500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "878",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT665",
      "total_costs": "3800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "879",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT568",
      "total_costs": "9000000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "880",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT398",
      "total_costs": "5800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "881",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT359",
      "total_costs": "900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "882",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT706",
      "total_costs": "9700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "883",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT586",
      "total_costs": "6600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "884",
      "driver_code": "DRIVER011",
      "shipment_no": "SHIPMENT858",
      "total_costs": "2200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "885",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT756",
      "total_costs": "9300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "886",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT110",
      "total_costs": "8100000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "888",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT539",
      "total_costs": "9200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "889",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT607",
      "total_costs": "6600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "890",
      "driver_code": "DRIVER007",
      "shipment_no": "SHIPMENT722",
      "total_costs": "5900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "891",
      "driver_code": "DRIVER014",
      "shipment_no": "SHIPMENT335",
      "total_costs": "8300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "892",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT845",
      "total_costs": "6800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "893",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT835",
      "total_costs": "1300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "894",
      "driver_code": "DRIVER009",
      "shipment_no": "SHIPMENT716",
      "total_costs": "3800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "895",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT607",
      "total_costs": "6200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "896",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT474",
      "total_costs": "3200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "897",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT758",
      "total_costs": "5200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "898",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT299",
      "total_costs": "4400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "899",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT949",
      "total_costs": "3100000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "900",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT802",
      "total_costs": "2600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "901",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT127",
      "total_costs": "400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "902",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT243",
      "total_costs": "6600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "903",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT780",
      "total_costs": "9500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "904",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT009",
      "total_costs": "5900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "905",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT454",
      "total_costs": "9100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "906",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT677",
      "total_costs": "4500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "907",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT683",
      "total_costs": "4000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "908",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT358",
      "total_costs": "8600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "909",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT584",
      "total_costs": "2500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "910",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT214",
      "total_costs": "3500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "911",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT726",
      "total_costs": "300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "912",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT217",
      "total_costs": "9800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "913",
      "driver_code": "DRIVER014",
      "shipment_no": "SHIPMENT573",
      "total_costs": "400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "914",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT194",
      "total_costs": "3200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "915",
      "driver_code": "DRIVER014",
      "shipment_no": "SHIPMENT852",
      "total_costs": "6700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "916",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT938",
      "total_costs": "1300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "917",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT835",
      "total_costs": "2500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "918",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT816",
      "total_costs": "4000000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "919",
      "driver_code": "DRIVER021",
      "shipment_no": "SHIPMENT843",
      "total_costs": "5200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "921",
      "driver_code": "DRIVER028",
      "shipment_no": "SHIPMENT325",
      "total_costs": "0.00",
      "cost_status": "PENDING"
    },
    {
      "id": "922",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT352",
      "total_costs": "8800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "923",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT635",
      "total_costs": "3900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "924",
      "driver_code": "DRIVER004",
      "shipment_no": "SHIPMENT649",
      "total_costs": "4000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "925",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT392",
      "total_costs": "7100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "926",
      "driver_code": "DRIVER024",
      "shipment_no": "SHIPMENT084",
      "total_costs": "4500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "927",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT417",
      "total_costs": "1200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "928",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT590",
      "total_costs": "7400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "929",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT636",
      "total_costs": "9000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "930",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT133",
      "total_costs": "3700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "931",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT326",
      "total_costs": "5600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "932",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT653",
      "total_costs": "6000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "933",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT611",
      "total_costs": "3800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "934",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT518",
      "total_costs": "1200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "935",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT670",
      "total_costs": "7400000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "936",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT083",
      "total_costs": "900000.00",
      "cost_status": "PAID"
    },
    {
      "id": "937",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT518",
      "total_costs": "7500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "938",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT703",
      "total_costs": "5600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "939",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT227",
      "total_costs": "8900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "940",
      "driver_code": "DRIVER007",
      "shipment_no": "SHIPMENT291",
      "total_costs": "4600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "941",
      "driver_code": "DRIVER011",
      "shipment_no": "SHIPMENT417",
      "total_costs": "200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "942",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT857",
      "total_costs": "8400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "943",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT293",
      "total_costs": "2700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "944",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT635",
      "total_costs": "7100000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "945",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT666",
      "total_costs": "300000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "946",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT510",
      "total_costs": "2200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "947",
      "driver_code": "DRIVER008",
      "shipment_no": "SHIPMENT385",
      "total_costs": "3300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "948",
      "driver_code": "DRIVER031",
      "shipment_no": "SHIPMENT207",
      "total_costs": "7000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "949",
      "driver_code": "DRIVER003",
      "shipment_no": "SHIPMENT328",
      "total_costs": "6300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "950",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT689",
      "total_costs": "9100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "951",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT365",
      "total_costs": "4200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "952",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT937",
      "total_costs": "4200000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "953",
      "driver_code": "DRIVER034",
      "shipment_no": "SHIPMENT145",
      "total_costs": "7100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "954",
      "driver_code": "DRIVER005",
      "shipment_no": "SHIPMENT176",
      "total_costs": "4300000.00",
      "cost_status": "PAID"
    },
    {
      "id": "955",
      "driver_code": "DRIVER013",
      "shipment_no": "SHIPMENT888",
      "total_costs": "9200000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "956",
      "driver_code": "DRIVER029",
      "shipment_no": "SHIPMENT430",
      "total_costs": "3100000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "957",
      "driver_code": "DRIVER012",
      "shipment_no": "SHIPMENT225",
      "total_costs": "9300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "958",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT815",
      "total_costs": "6500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "959",
      "driver_code": "DRIVER015",
      "shipment_no": "SHIPMENT435",
      "total_costs": "100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "960",
      "driver_code": "DRIVER021",
      "shipment_no": "SHIPMENT234",
      "total_costs": "2800000.00",
      "cost_status": "PAID"
    },
    {
      "id": "961",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT746",
      "total_costs": "800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "962",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT853",
      "total_costs": "600000.00",
      "cost_status": "PAID"
    },
    {
      "id": "963",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT193",
      "total_costs": "900000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "964",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT938",
      "total_costs": "9500000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "965",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT919",
      "total_costs": "9200000.00",
      "cost_status": "PAID"
    },
    {
      "id": "966",
      "driver_code": "DRIVER011",
      "shipment_no": "SHIPMENT825",
      "total_costs": "9600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "967",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT796",
      "total_costs": "8600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "968",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT413",
      "total_costs": "6900000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "969",
      "driver_code": "DRIVER002",
      "shipment_no": "SHIPMENT664",
      "total_costs": "1700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "970",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT695",
      "total_costs": "8500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "971",
      "driver_code": "DRIVER030",
      "shipment_no": "SHIPMENT466",
      "total_costs": "6100000.00",
      "cost_status": "PAID"
    },
    {
      "id": "972",
      "driver_code": "DRIVER010",
      "shipment_no": "SHIPMENT822",
      "total_costs": "4000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "973",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT773",
      "total_costs": "600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "974",
      "driver_code": "DRIVER033",
      "shipment_no": "SHIPMENT924",
      "total_costs": "7600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "975",
      "driver_code": "DRIVER025",
      "shipment_no": "SHIPMENT118",
      "total_costs": "8300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "976",
      "driver_code": "DRIVER018",
      "shipment_no": "SHIPMENT005",
      "total_costs": "8800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "977",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT610",
      "total_costs": "2000000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "978",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT331",
      "total_costs": "6500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "979",
      "driver_code": "DRIVER006",
      "shipment_no": "SHIPMENT511",
      "total_costs": "8700000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "980",
      "driver_code": "DRIVER019",
      "shipment_no": "SHIPMENT930",
      "total_costs": "1400000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "982",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT459",
      "total_costs": "4400000.00",
      "cost_status": "PAID"
    },
    {
      "id": "983",
      "driver_code": "DRIVER021",
      "shipment_no": "SHIPMENT373",
      "total_costs": "5500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "984",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT924",
      "total_costs": "3000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "985",
      "driver_code": "DRIVER016",
      "shipment_no": "SHIPMENT724",
      "total_costs": "5000000.00",
      "cost_status": "PAID"
    },
    {
      "id": "986",
      "driver_code": "DRIVER027",
      "shipment_no": "SHIPMENT253",
      "total_costs": "4500000.00",
      "cost_status": "PAID"
    },
    {
      "id": "987",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT246",
      "total_costs": "3700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "988",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT707",
      "total_costs": "3800000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "989",
      "driver_code": "DRIVER020",
      "shipment_no": "SHIPMENT941",
      "total_costs": "3700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "990",
      "driver_code": "DRIVER021",
      "shipment_no": "SHIPMENT537",
      "total_costs": "7600000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "991",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT875",
      "total_costs": "2500000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "992",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT442",
      "total_costs": "4000000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "993",
      "driver_code": "DRIVER032",
      "shipment_no": "SHIPMENT854",
      "total_costs": "2100000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "994",
      "driver_code": "DRIVER022",
      "shipment_no": "SHIPMENT343",
      "total_costs": "4700000.00",
      "cost_status": "PAID"
    },
    {
      "id": "995",
      "driver_code": "DRIVER035",
      "shipment_no": "SHIPMENT871",
      "total_costs": "2800000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "996",
      "driver_code": "DRIVER023",
      "shipment_no": "SHIPMENT756",
      "total_costs": "3700000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "997",
      "driver_code": "DRIVER026",
      "shipment_no": "SHIPMENT905",
      "total_costs": "7600000.00",
      "cost_status": "PENDING"
    },
    {
      "id": "998",
      "driver_code": "DRIVER017",
      "shipment_no": "SHIPMENT899",
      "total_costs": "1300000.00",
      "cost_status": "CONFIRMED"
    },
    {
      "id": "1000",
      "driver_code": "DRIVER001",
      "shipment_no": "SHIPMENT145",
      "total_costs": "8400000.00",
      "cost_status": "PENDING"
    }
  ];

export default dataShipmentCosts