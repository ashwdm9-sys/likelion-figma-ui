export type Role = {
  id: string;
  name: string;
  description: string;
  color: string;
  isMyRole: boolean;
};

export type ScriptLine = {
  id: string;
  type: 'dialogue' | 'direction' | 'page';
  roleId?: string;
  text: string;
};
