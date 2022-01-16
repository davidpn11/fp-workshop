type Status = 'neutral' | 'positive' | 'negative';

type ChallengeStatus = Record<string, Status>;

type IOType = 'primitive' | 'array' | 'json' | 'component';
type ParamsType = 'simple' | 'spread';

type Challenge = {
  id: string;
  input: any;
  expectedOutput: any;
  output?: any;
  handler: (...x: any) => any;
  status: Status;
  outputType: IOType;
  inputType: IOType;
  paramsType?: ParamsType;
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
