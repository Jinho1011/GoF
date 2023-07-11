import Subject from "../types/Subject";

export type Team = "Home" | "Away";
export type Observer = (teamThatScored: Team) => void;

class GameSubject implements Subject {
  private observers: Observer[] = [];

  public register(listener: Observer) {
    this.observers.push(listener);
  }

  public remove(listenerToRemove: Observer) {
    this.observers = this.observers.filter(
      (observer) => observer !== listenerToRemove
    );
  }

  public notify(team: Team) {
    this.observers.forEach((observer) => observer(team));
  }

  public score(team: Team) {
    this.notify(team);
  }
}

const gameSubject = new GameSubject();

export default gameSubject;
