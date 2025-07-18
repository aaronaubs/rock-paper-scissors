import random
import time

player_score = 0
computer_score = 0
round_count = 1

def play_round():
    global player_score
    global computer_score
    choices = ["rock", "paper", "scissors"]

    print(" ") 
    print(f"--Round {round_count}--")
    player_choice = input("Please choose rock, paper or scissors. >>").lower()
    while player_choice not in choices:
        print(" ")
        player_choice = input("Invalid choice. Please try again. >>")

    computer_choice = random.choice(choices)
    print(" ")
    print(f"Computer choice: {computer_choice}")

    if player_choice == computer_choice:
        print("It's a draw!")
        print(" ")
        time.sleep(1)
        print(f"Player: {player_score}, Computer: {computer_score}.")
        return
    elif (
        (player_choice == "rock" and computer_choice == "scissors") or
        (player_choice == "paper" and computer_choice == "rock") or
        (player_choice == "scissors" and computer_choice == "paper")
    ):
        print("You win!")
        player_score += 1
        print(" ")
        time.sleep(1)
        print(f"Player: {player_score}, Computer: {computer_score}.")
        return
    else:
        print("You lose!")
        computer_score += 1
        print(" ")
        time.sleep(1)
        print(f"Player: {player_score}, Computer: {computer_score}.")
        return
  
def play_rps():
    global player_score
    global computer_score

    print("Welcome to the game!")
    print("This is a best-of-5 match vs the computer.")
    time.sleep(2)
    print("Starting in 3...")
    time.sleep(1)
    print("2...")
    time.sleep(1)
    print("1...")
    time.sleep(1)
    for i in range(4):
        play_round()
        time.sleep(2)
        global round_count
        round_count += 1
    play_round()
    if player_score == computer_score:
        print("It's ended in a tie! Nice effort!")
        return
    elif player_score > computer_score:
        print("You won the game! Congrats!")
        return
    else:
        print("You lost the game... Better luck next time.")
        return

play_rps()