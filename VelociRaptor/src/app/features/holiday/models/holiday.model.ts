export interface Holiday {
  id: string;
  name: string;
  date: string; // ISO 8601 date format (e.g. '2025-10-03')
  location: string; // e.g. "Germany", "Brazil"
  type?: 'public' | 'company' | 'custom';
  teamTags?: string[]; // optional: ["EU Team", "LATAM Team"]
}
