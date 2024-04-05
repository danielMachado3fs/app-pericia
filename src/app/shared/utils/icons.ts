import * as lucideIcons from '@ng-icons/lucide';

const iconsMap: {
  name: string,
  icon: string,
}[] = [
  {
    name: 'grafoscopiaIcon',
    icon:  lucideIcons.lucideFilePenLine,
  }
]

const icons: {[k: string]: string} = {};
iconsMap.forEach((i) => {
  icons[i.name] = i.icon;
})

export { icons };
