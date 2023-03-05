import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'
import { InMemoryDataService } from 'src/services/in-memory-data.service';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {

  private service: InMemoryDataService
  private title: Title
  private meta: Meta

  constructor(private titleService: Title, private metaService: Meta, private memoryService: InMemoryDataService) {
    this.service = memoryService
    this.title = titleService
    this.meta = metaService
  }

  ngOnInit(): void {
      this.title.setTitle("Hello from the Server")

      this.meta.addTag({ name: "description", content: "Saying hello from the server" })
  }

  callService(event: MouseEvent) {
    this.service.print()
  }
}
