import { greetings } from "../constants";

export const getRandomGreeting = ()=>{
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
}