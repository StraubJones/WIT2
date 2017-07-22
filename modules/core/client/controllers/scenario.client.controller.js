(function () {
  'use strict'
  angular
    .module('core')
    .controller('ScenarioController', ScenarioController)

  function ScenarioController ($scope) {
    var $ctrl = this
    $ctrl.score = 0
    $ctrl.showingResults = false
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
            value: 3,
            pros: [''],
            cons: []
          },
          2: {
            text: 'Would you ask a man that question? That x',
            value: 2,
            pros: [],
            cons: []
          },
          3: {
            text: 'three',
            value: 1,
            pros: [],
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

    $ctrl.showResults = function (option) {
      console.log('option: ', option)
      $ctrl.choice = option
      $ctrl.score += option.value
      $ctrl.showingResults = true
      // $scope.$digest()
    }
    $ctrl.next = function () {
      $ctrl.showingResults = false
    }
  }
}())
