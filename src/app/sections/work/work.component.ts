import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  works = [
    {
      src: "videos/cafe-bean-video.mp4",
      id: "video-1",
      title: "Café Bean",
      description: "Group project to create a mobile friendly fictional website. Design of UI mocks and layouts from scratch. Texts and images taken from internet.",
      technologies: "Technologies implemented: HTML, CSS, jQuery, Figma.",
      link: "https://github.com/Antonella-T/websites/tree/master/cafe-bean-group"
    },
    {
      src: "videos/dark-shine-video.mp4",
      id: "video-2",
      title: "Dark Shine website",
      description: "Project to create a home page website with dark background, practicing flexbox properties, jQuery galleries, fully responsive website and mobile menu.",
      technologies: "Technologies implemented: HTML, CSS, jQuery, JS.",
      link:"https://github.com/Antonella-T/dark-shine-corporation"
    },
    {
      src: "videos/ftc-video.mp4",
      id: "video-3",
      title: "FTC website",
      description: "Group project to create a mobile friendly fictional website. Design of UI mocks and layouts from scratch. Texts and images taken from internet.",
      technologies: "Technologies implemented: HTML, CSS, jQuery, Figma.",
      link:"https://github.com/Antonella-T/front-end-web-developer-site"
    },
    {
      src: "videos/fullerton-video.mp4",
      id: "video-4",
      title: "Fullerton website",
      description: " Project to create a home page website practicing flexbox properties, jQuery galleries, fully responsive website and mobile menu.",
      technologies: "Technologies implemented: HTML, CSS, jQuery, JS.",
      link:"https://github.com/Antonella-T/fullerton-corporation"
    },
    {
      src: "videos/wedding-video.mp4",
      id: "video-5",
      title: "Wedding",
      description: "Project to create a home page website practicing flexbox properties, forms, fully responsive website and mobile menu.",
      technologies: "Technologies implemented: HTML, CSS, jQuery.",
      link:"https://github.com/Antonella-T/wedding-website"
    },
  ]

}


// $(document).ready(function () {
//   // FLIP GALLERY start

//   /*
//    * I want to disable this interactions in mobile devices because they do not implement hover events properly.
//    * This is the reference where I took the code to detect mobile devices. 
//    * https://medium.com/simplejs/detect-the-users-device-type-with-a-simple-javascript-check-4fc656b735e1.
//    */

//   function isMobile() {
//       var check = false;
//       (function (a) {
//           if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
//               check = true;
//       })(navigator.userAgent || navigator.vendor || window.opera);

//       return check;
//   };


//   /* 
//    * I want to disable flip-gallery if IE11 due to html tag incompatibility. 
//    * This is the reference: https://stackoverflow.com/questions/20089145/how-to-detect-ie11-using-jquery.
//    */
//   var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);
//   if (isIE11 || isMobile()) {
//       return;
//   }

//   var front = true;
//   var flipGallery = $('.flip-gallery');
//   // Do not run the function if the user do hover in the same element.
//   var degrees = 0;
//   var currentVideo;

//   $('#works > div').mouseenter(function () {
//       //1. find element to display.
//       var elementId = $(this).attr('data-video-selected');
//       var video = $('#' + elementId);

//       if (currentVideo == elementId) {
//           return;
//       }
//       degrees = degrees + 180;
//       currentVideo = elementId;

//       if (front) {
//           var cardBack = flipGallery.find('.card-back');
//           // 1. Check who has the active class (card-back) and remove it.
//           if (cardBack) {
//               cardBack.removeClass('card-back');
//           }
//           // 2. Add class to selected item (video).
//           video.addClass('card-back').css('transform', 'rotateY(180deg)');
//           // 3. Change the value of front (false).
//           front = false;
//       } else {
//           var cardfront = flipGallery.find('.card-front');
//           // 1. Check who has the active class (card-front) and remove it.
//           if (cardfront) {
//               cardfront.removeClass('card-front');
//           }
//           // 2. Add class to selected item (video).
//           video.addClass('card-front');
//           // 3. Change the value of front (true).
//           front = true;
//       }
//       // 4. Add translate to flipGallery.
//       flipGallery.css('transform', 'rotateY(' + (degrees) + 'deg)');
//   });
//   // FLIP GALLERY end
// });