export class Artrium {
    public ImageName: string;
    public ImageSrc: string;

    static clone(artrium: Artrium): Artrium {
        return new Artrium(artrium.ImageName, artrium.ImageSrc);
    }

    constructor(ImageName: string, ImageSrc: string) {
        this.ImageName = ImageName;
        this.ImageSrc = ImageSrc;
    }

    clear() {
        this.ImageName = '';
        this.ImageSrc = '';
    }
}
