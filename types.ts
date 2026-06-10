
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ProjectConsultationResponse {
  roadmap: string;
  estimatedTech: string[];
  suggestions: string;
}
