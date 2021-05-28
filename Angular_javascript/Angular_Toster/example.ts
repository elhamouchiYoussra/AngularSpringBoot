

@Component({
    selector: 'example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss'],
})


export class example implements OnInit {

    constructor(private toasterService: NbToastrService,) {
    }
    ngOnInit() {
        // here we call showToast function
        this.showToast('danger', 'SUPPRIMER', 'vous ne pouvez pas supprimer l\'intervention. vous avez besoin d\'un accès administrateur.');

    }

    showToast(type: NbComponentStatus, title: string, body: string) {

        const config = {
            status: type,
            destroyByClick: true,
            duration: 10000,
            hasIcon: true,
            position: NbGlobalPhysicalPosition.TOP_RIGHT,
            preventDuplicates: false,
        };
        const titleContent = title ? `. ${title}` : '';

        this.toasterService.show(
            body,
            `${titleContent}`,
            config);
    }
}

