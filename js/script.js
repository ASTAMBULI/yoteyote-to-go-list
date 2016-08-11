$(document).ready(function() {
    //Page Loading
    /*=======================================
               Data Array
    =========================================*/
    var database = [
   {
      countryId:1,
      name:"Tanzania",
      regions:[
         {
            rank:"08",
            name:"Arusha",
            site:"vimeo.com",
            imgUrl:"img/arusha.jpg",
            //time:"2016-04-23T18:25:43.511Z",
            time:"2 days ago",
            status:true,
            contributor:"Abubakar",
            comments:5,            tags:[
               "Video",
               "Africa",
               "Tanzania",
               "Arusha"
            ],

         },
         {
            rank:"03",
            name:"Dar es Salaam",
            site:"vimeo.com",
            imgUrl:"img/dar.jpg",
            //time:"2016-04-23T18:25:43.511Z",
            time:"5 hrs ago",
            status:false,
            contributor:"Abubakar",
            comments:3,            tags:[
               "Video",
               "Africa",
               "Tanzania",
               "Dar"
            ],

         },{
            rank:"02",
            name:"Tanga",
            site:"vimeo.com",
            imgUrl:"img/tanga.jpg",
            //time:"2016-04-23T18:25:43.511Z",
            time:"2 days ago",
            status:true,
            contributor:"Abubakar",
            comments:8,            tags:[
               "Video",
               "Africa",
               "Tanzania",
               "Tanga"
            ],

         },
         {
            rank:"07",
            name:"Kilimanjaro",
            site:"vimeo.com",
            imgUrl:"img/kilimanjaro.jpeg",
            //time:"2016-04-23T18:25:43.511Z",
            time:"1 hr ago",
            status:false,
            contributor:"Renson",
            comments:1,            tags:[
               "East Africa",
               "Tanzania",
               "kilimanjaro"
            ],

         },{
            rank:"11",
            name:"Mwanza",
            site:"vimeo.com",
            imgUrl:"img/mwanza.jpg",
            //time:"2016-04-23T18:25:43.511Z",
            time:"15 days ago",
            status:true,
            contributor:"Fahad",
            comments:45,            tags:[
               "Video",
               "Tanzania",
               "Mwanza"
            ],

         },
         {
            rank:"25",
            name:"Kigoma",
            site:"vimeo.com",
            imgUrl:"img/kigoma.jpg",
            //time:"2016-04-23T18:25:43.511Z",
            time:"6 hrs ago",
            status:true,
            contributor:"Tegeka",
            comments:1,            tags:[
               "Video",
               "Africa",
               "Tanzania",
               "Kigoma",
               "Gombe"
            ],

         },
          {
            rank:"38",
            name:"Iringa",
            site:"vimeo.com",
            imgUrl:"img/iringa.jpg",
            //time:"2016-04-23T18:25:43.511Z",
            time:"3 sec ago",
            status:true,
            contributor:"Ramadhan",
            comments:12,            tags:[
               "Video",
               "Africa",
               "Stone City"
            ],

         }

      ]
   },
   {
      countryId:2,
      name:"Kenya",
      regions:[
         {
            rank:"12",
            name:"Nairobi",
            site:"vimeo.com",
            imgUrl:"img/nairobi.jpg",
            //time:"2016-04-23T18:25:43.511Z",
            time:"20 days ago",
            status:true,
            contributor:"Njoroge",
            comments:1,            tags:[
               "Video",
               "Town",
               "Kenya"
            ],

         },
         {
            rank:"16",
            name:"Mombasa",
            site:"vimeo.com",
            imgUrl:"img/mombasa.jpg",
            //time:"2016-04-23T18:25:43.511Z",
            time:"2 min ago",
            status:false,
            contributor:"Kassam",
            comments:3,            tags:[
               "Video",
               "East Africa"
            ],

         },
         {
            rank:"18",
            name:"Nakuru",
            site:"vimeo.com",
            imgUrl:"img/nakuru.jpg",
            //time:"2016-04-23T18:25:43.511Z",
            time:"2 min ago",
            status:true,
            contributor:"Dorothy",
            comments:9,            tags:[
               "Video",
               "Nakuru"
            ]

         },
         {
            rank:"48",
            name:"Lamu",
            site:"vimeo.com",
            imgUrl:"img/lamu.jpg",
            //time:"2016-04-23T18:25:43.511Z",
            time:"2 month ago",
            status:true,
            contributor:"Lutu",
            comments:35,            tags:[
               "Live Stream",
               "Lamu"
            ]

         }
      ]
   },
     {
      countryId:3,
      name:"Uganda",
      regions:[
         {
            rank:"06",
            name:"Kampala",
            site:"vimeo.com",
            imgUrl:"img/giraffe.jpg",
            //time:"2016-04-23T18:25:43.511Z",
            time:"15 days ago",
            status:true,
            contributor:"Moyo",
            comments:1,            tags:[
               "Video",
               "Town",
               "Kampala"
            ],

         },
         {
            rank:"54",
            name:"Entebe",
            site:"vimeo.com",
            imgUrl:"img/mombasa.jpg",
            //time:"2016-04-23T18:25:43.511Z",
            time:"56 min ago",
            status:false,
            contributor:"Habibu",
            comments:3,            tags:[
               "Entebe",
               "Uganda"
            ],

         },
         {
            rank:"10",
            name:"Gulu",
            site:"vimeo.com",
            imgUrl:"img/nakuru.jpg",
            //time:"2016-04-23T18:25:43.511Z",
            time:"30 min ago",
            status:true,
            contributor:"Salama",
            comments:9,            tags:[
               "Video",
               "Nakuru"
            ]

         },
         {
            rank:"59",
            name:"Mbarara",
            site:"vimeo.com",
            imgUrl:"img/lamu.jpg",
            //time:"2016-04-23T18:25:43.511Z",
            time:"2 years ago",
            status:true,
            contributor:"Jacky",
            comments:90,            tags:[
               "Live Stream",
               "Mbarara"
            ]

         }
      ]
   }
];




    //variables
    var menu = $("#tabs ul");
    

    //Function for adding list items
    function add_item(name,cId) {
        return "<li data-id=\""+cId+"\">" + name + "</li>";
    }

     $.each(database, function(key, value) {
                menu.append(add_item(value.name,key));

            });

   

    //Function for fetching data
    function addItems(index) {
        $("#elements").html("");
        var list = database[index];
        var elem=Array();
        var sts;
        var hTags;
        var iterator=0;
        //show active tab
        $("#tabs li").removeClass("active");
        $("#tabs li[data-id="+index+"]").addClass("active");
        $.each(list.regions, function(id, region) {
            hTags=" ";
            sts="";
            if (region.status==true) {
                sts="<i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>"
            }
            $.each(region.tags, function(index,tag) {
              hTags+=" #"+tag;   
            });

           

            elem[id]= "<div class=\"element animate-element\"><div class=\"rank\">"+
                     "<i class=\"fa fa-chevron-up\" aria-hidden=\"true\"></i><b>"+region.rank+"</b>"+
                     "</div> <div class=\"image\"><img src=\""+region.imgUrl+" \" alt=\""+region.name+"\">"+
                      "<i class=\"fa fa-play-circle\" aria-hidden=\"true\"></i>"+
                    "</div><div class=\"element-content\"><div class=\"element-title\">"+
                    "<h3>"+region.name+" <span>"+region.site+"</span></h3></div>"+
                     "<div class=\"element-details\"><span class=\"time\"> "+region.time+" </span>"+
                    "by "+sts+" <b>"+region.contributor+"</b>"+
                     "<span class=\"tags\"> "+hTags+" </span></div>"+
                    "</div><span class=\"comments\">"+
                     "<i class=\"fa fa-comment\" aria-hidden=\"true\"></i> <b>"+region.comments+"</b>"+
                      "</span></div><div class=\"h-line\"></div>";

                setTimeout(function() {
                    $("#elements").append(elem[id]);
                   }, 350 * id);
 
        });

       
    }

    //Load with default data
    $("#elements").html(addItems(0));

    //Listen to tab click events
    $("#content-container").delegate("#tabs li", "click", function(e) {
        var index = $(e.currentTarget).attr("data-id");
      addItems(index);


        


    });

    $(".close i,:not(.window *)").on("click", function(e) {
        if (e.target !== this)
            return;
        $(".window").hide(function() {
            $(this).removeClass("animate-pop-up-in").addClass("animate-pop-up-out").css("display","none");

             setTimeout(function() {
            $(".main").fadeOut(function() {
                $(this).removeClass("animate-pop-up-bg").addClass("animate-pop-up-bg-out").css("display","none");
            });
        }, 300);
        });
               
    });

    $("#tiles").delegate(".droper", "click", function(e) {
        var clicked = $(e.currentTarget).attr("data-id");
        $("[clicked-id=" + clicked + "]").toggleClass("open");
    });

    $("#tiles *:not(.dropdown-menu *)").on("click", function() {
        $(".dropdown-menu").removeClass("open");
    });

    $("#tiles").delegate(".dropdown-menu li a", "click", function(e) {
        var clicked = $(e.currentTarget).parent().parent().attr("clicked-id");
        $("span:first-child[data-id=" + clicked + "]").html(
            "<span>" +
            $(e.currentTarget).text() +
            "</span><i class=\"fa fa-sort-desc\" aria-hidden=\"true\"></i>");
    });

   $(".popup-body").delegate("li","mouseover mouseout", function(e) {
         if (e.currentTarget !== this)
            return;
        $(e.currentTarget).find("h4 span i").toggle();     
    });





});