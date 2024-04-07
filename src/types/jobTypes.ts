// Generated Prisma Client types for your Prisma schema

export interface CandidateSubmissions {
  submission_id: number;
  submitted_at: Date;
  opening_id?: number | null;
  code?: string | null;
  ai_evaluation?: string | null;
  candidate_id?: string | null;
  rating?: number | null;
  evaluation_received_at?: Date | null;
  Users?: Users | null;
  JobOpenings?: JobOpenings | null;
  Nudges: Nudges[];
}

export interface JobOpenings {
  opening_id: number;
  created_at: Date;
  org_id: number;
  opening_name?: string | null;
  assignment_problem_statement?: string | null;
  technical_questions?: string[] | null;
  salary?: number | null;
  job_tags: string[];
  location?: string | null;
  is_deleted: boolean;
  CandidateSubmissions: CandidateSubmissions[];
  Orgs: Orgs;
  Nudges: Nudges[];
  SavedJobs: SavedJobs[];
}

export interface Meetings {
  id: number;
  created_at: Date;
  date: Date;
  user_id?: string | null;
  org_id?: number | null;
  meet_link?: string | null;
}

export interface Nudges {
  id: number;
  last_nudged_at: Date;
  submission_id?: number | null;
  candidate_id?: string | null;
  opening_id?: number | null;
  nudge_message?: string | null;
  Users?: Users | null;
  JobOpenings?: JobOpenings | null;
  CandidateSubmissions?: CandidateSubmissions | null;
}

export interface Orgs {
  org_id: number;
  created_at: Date;
  password?: string | null;
  email: string;
  name?: string | null;
  updated_at?: Date | null;
  JobOpenings: JobOpenings[];
}

export interface SavedJobs {
  opening_id: number;
  created_at: Date;
  candidate_id: string;
  Users: Users;
  JobOpenings: JobOpenings;
}

export interface Users {
  id: string;
  created_at: Date;
  name?: string | null;
  email?: string | null;
  password?: string | null;
  phone?: number | null;
  CandidateSubmissions: CandidateSubmissions[];
  Nudges: Nudges[];
  SavedJobs: SavedJobs[];
}
