let superTeam = {
    title: String(),
    leader: String(),
    members: Array(),
    memberCount: Number(),
    agenda: String(),
    isEvil: Boolean(),
}
superTeam.title = prompt('Enter name of the team', '')
superTeam.leader = prompt('Enter name of the team\'s leader', '')
superTeam.members = prompt('Enter the names of the team members separated by commas', '').split(",")
superTeam.agenda = prompt('Enter the goals and ideas of the team', '')
superTeam.isEvil = prompt('Is your team evil? Enter yes or not', '')
superTeam.memberCount = +(superTeam.members).length + 1

alert("Here's the team:\n" + "name - " + superTeam.title + '\n'
    + "leader - " + superTeam.leader + '\n'
    + "members - " + superTeam.members + '\n'
    + "memberCount - " + superTeam.memberCount + "\n"
    + "agenda - " + superTeam.agenda + "\n"
    + "isEvil - " + superTeam.isEvil)