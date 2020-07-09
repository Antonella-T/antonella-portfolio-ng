import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
    blogs = [
        {
            link: "",
            title: "Tim what?!",
            description: "If you want to know more about Tim Berners-Lee and HTML, you need to read this blog!"
        },
        {
            link: "",
            title: "It's all about browsers this days...",
            description: "If you want to know more about Tim Berners-Lee and HTML, you need to read this blog!"
        },
        {
            link: "",
            title: "Coming soon!",
            description: "If you want to know more about Tim Berners-Lee and HTML, you need to read this blog!"
        },
    ];
}