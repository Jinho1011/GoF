import { Observer, Team } from "../model/Game";

interface Subject {
  register: (o: Observer) => void;
  remove: (o: Observer) => void;
  notify: (t: Team) => void;
}

export default Subject;
