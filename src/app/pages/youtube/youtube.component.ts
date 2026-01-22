import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  channelId = 'UCR2AZ3n2nR2nriCJBvW3y3A';
  apiKey = 'AIzaSyC_b-NYno5dJYi3fHaiHeq9j2pdmxYlGMc';
  videos: { snippet: any; id: any; safeUrl: SafeResourceUrl }[] = [];
  channelInfo: any;
  isLoading = true;
  error: string | null = null;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.fetchChannelInfo();
    this.fetchVideos();
  }

  fetchChannelInfo(): void {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${this.channelId}&key=${this.apiKey}`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        this.channelInfo = res.items[0];
      },
      error: (err) => {
        console.error('Channel info error:', err);
        this.error = 'Failed to load channel info.';
        this.isLoading = false;
      }
    });
  }

  fetchVideos(): void {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&channelId=${this.channelId}&order=date&part=snippet&type=video&maxResults=12`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        this.videos = res.items.map((video: any) => ({
          ...video,
          safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
            `https://www.youtube.com/embed/${video.id.videoId}`
          )
        }));
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Video error:', err);
        this.error = 'Failed to load videos. Please try again later.';
        this.isLoading = false;
      }
    });
  }
}
