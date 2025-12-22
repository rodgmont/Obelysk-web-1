import React from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export interface SectorItem {
  title: string;
  icon: React.ReactNode;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export enum AnimationState {
  HIDDEN = "hidden",
  VISIBLE = "visible"
}