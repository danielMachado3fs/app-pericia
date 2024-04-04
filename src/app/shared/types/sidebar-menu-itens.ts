interface SidebarMenuItens {
  title: string;
  route: string | null;
  icon: string;
  subItens: SidebarMenuItens[] | undefined;
  isActive?: boolean;
  isOpen?: boolean;
}

const menuItensSidbar: SidebarMenuItens[] = [
  
]