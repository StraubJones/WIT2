(function () {
  'use strict'
  angular
    .module('core')
    .controller('ScenarioController', ScenarioController)

  function ScenarioController ($scope) {
    var $ctrl = this
    let scoreTrack = 0
    $ctrl.score = 0
    $ctrl.maxscore = 6
    $ctrl.showingResults = false
    $ctrl.showOne = true
    $ctrl.showTwo = false
    $ctrl.showFinal = false
    $ctrl.choice
    $ctrl.scenarioOptions = {
      scenarioOne: {
        dialogOptions: {
          1: {
            text: 'Remember, Karl, how hard she worked on Project A? And she really rallied the team after that tough week in February.',
            value: 1,
            pros: [
              'Focuses on positives.',
              'Recognizes her work.'
            ],
            cons: [
              'Doesn’t actually address the sexism of the attitude or challenge his unfair negative bias.',
              'Depending how much your boss values your opinion, he may or may not change his mind.'
            ]
          },
          2: {
            text: 'Are you saying that because she’s a woman?',
            value: 2,
            pros: [
              'Asks questions.',
              'Directly addresses the sexism.'
            ],
            cons: [
              'Could be seen as accusatory.',
              'Might put him on the defensive.',
              'Is easy for him to dismiss, as it presents no clear supporting evidence of the sexism.'
            ]
          },
          3: {
            text: 'Well, she’s worked just as hard and been quantitatively more successful than Bob, who we gave this promotion to last year. Is there something specific that is concerning you?',
            value: 3,
            pros: [
              'Asks questions.',
              'Addresses the sexism.',
              'Draws direct attention to the sexism without directly accusing.',
              'Provides clear evidence for the sexism, making it hard to dismiss.'
            ],
            cons: []
          },
          4: {
            text: 'You say nothing.',
            value: 0,
            pros: ['You spare yourself any danger to your job or relationships.'],
            cons: ['Women around you recognize that you will not support them when the chips are down.']
          }
        }
      },
      scenarioTwo: {
        dialogOptions: {
          1: {
            text: 'Of course it would be illegal to take issues like pregnancy into consideration for a hire, so let’s focus on her resume, which looks really good.',
            value: 2,
            pros: [
              'Appeals to outside authority.',
              'Focuses on the important matters for the job.'
            ],
            cons: [
              'Might seem like a threat. Make sure to say it gently or flippantly, so that it doesn’t come across as more menacing than it is meant.'
            ]
          },
          2: {
            text: 'Lots of people need to take leave for different reasons, so it really shouldn’t be that big of a deal.',
            value: 1,
            pros: [
              'Normalizes and contextualizes the possibility of maternity leave.'
            ],
            cons: [
              'Dismisses the boss’ concerns, which might make him less likely to be receptive to your comments.',
              'Doesn’t directly address the sexism.'
            ]
          },
          3: {
            text: 'There’s actually a lot of studies that show that having a woman workers take maternity leave is good not only for the country\'s economy but for the company she works for. I could show you the studies, if you want ...',
            value: 3,
            pros: [
              'Appeals to outside authority.',
              'Focuses on the company’s bottom line.',
              'Dispels sexist myths.'
            ],
            cons: []
          },
          4: {
            text: 'You say nothing.',
            value: 0,
            pros: ['You spare yourself any danger to your job or relationships.'],
            cons: ['Women around you recognize that you will not support them when the chips are down.']
          }
        }
      }
    }

    $ctrl.switchScene = function () {
      if ($ctrl.showOne) {
        $ctrl.showOne = !$ctrl.showOne
        $ctrl.showTwo = !$ctrl.showTwo
      } else if ($ctrl.showTwo) {
        $ctrl.showTwo = !$ctrl.showTwo
        $ctrl.showFinal = !$ctrl.showFinal
        $ctrl.score = scoreTrack
      }
    }

    // $ctrl.getScoreArray = function (isSuccess) {
    //   let tempArray = []
    //   let iteration
    //   if (isSuccess) {
    //     iteration = $ctrl.score
    //   } else {
    //     iteration = $ctrl.maxscore - $ctrl.score
    //   }
    //   for (var i = 0; i < iteration; i++) {
    //     tempArray.push({number: i})
    //   }
    //   return tempArray
    // }

    $ctrl.showResults = function (option) {
      $ctrl.choice = option
      let holder = scoreTrack
      scoreTrack = holder + option.value
      $ctrl.showingResults = true
    }
    $ctrl.next = function () {
      $ctrl.showingResults = false
      $ctrl.switchScene()
    }
  }
}())
