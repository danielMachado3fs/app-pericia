import { lucideFilePenLine } from '@ng-icons/lucide';

interface SidebarMenuItens {
  title: string;
  route: string | null;
  icon: string;
  subItens?: SidebarMenuItens[];
  isActive?: boolean;
  isOpen?: boolean;
}

const menuItensSidbar: SidebarMenuItens[] = [
  {
    title: 'Grafoscopia',
    icon: lucideFilePenLine,
    route: '/grafoscopia'
  }
]

export { SidebarMenuItens, menuItensSidbar };
