var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1b1464',
    parent: 'phaser-example',
    physics: {
        default: 'matter'
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ball', 'assets/sprites/shinyball.png');
}

function create ()
{
    this.physics.world.setBounds();

    //  Our two bodies which will be connected by a constraint (aka a Joint or a Spring)

    var ballA = this.physics.add.image(420, 100, 'ball', null, { isCircle: true, friction: 0.005, restitution: 0.6 });
    var ballB = this.physics.add.image(400, 200, 'ball', null, { isCircle: true, friction: 0.005, restitution: 0.6 });

    //  You can create a constraint between the two bodies using a Factory function.
    //  The value 100 is the resting length and 0.2 is the stiffness of the constraint.

    this.physics.add.constraint(ballA, ballB, 100, 0.2);

    //  To help those of you more used to the Box2D syntax you can use
    //  add.joint or add.spring instead (with the exact same parameters)

    // this.physics.add.spring(ballA, ballB, 100, 0.2);
    // this.physics.add.joint(ballA, ballB, 100, 0.2);

    //  Or you can create a native Matter constraint:

    // var constraint = Phaser.Physics.Matter.Constraint.create({
    //     bodyA: ballA.body,
    //     bodyB: ballB.body,
    //     length: 100,
    //     stiffness: 0.2
    // });

    //  Which you then have to add to the world yourself:

    // this.physics.world.add(constraint);
}
