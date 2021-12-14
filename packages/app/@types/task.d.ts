type Status = 'neutral' | 'positive' | 'negative';

type ChallengeStatus = Record<string, Status>;

type Challenge = {
  id: string;
  input: any;
  expectedOutput: any;
  output?: any;
  handler: (...x: any) => any;
  status: Status;
  type: 'primitive' | 'array' | 'json';
};

type ChallengeSet = {
  title: string;
  markdown: string;
  challenges: Challenge[];
};

type TaskType = {
  title: string;
  sets: ChallengeSet[];
  currentSet: ChallengeSet;
};

type ChallegeType = {
  challenge: Challenge;
  onRun: (id: string) => void;
};
