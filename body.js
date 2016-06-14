class Body {
  constructor(shape, x, y) {
    this.shape = shape;
    this.position = new Vec2(x, y);
    this.velocity = new Vec2(0, 0);
    this.angularVelocity = 0;
    this.torque = 0;
    this.orient = ImpulseMath.random(-Math.PI, Math.PI);
    this.force = new Vec2(0, 0);
    this.staticFriction = 0.5;
    this.dynamicFriction = 0.3;
    this.restitution = 0.2;
    shape.body = this;
    shape.initialize();
  }
  applyForce(f) {
    this.force.addi(f);
  }
  applyImpulse(impulse, contactVector) {
    this.velocity.addsi(impulse, this.invMass);
    this.angularVelocity += this.invInertia * contactVector.cross(impulse);
  }
  setStatic() {
    this.inertia = 0;
    this.invInertia = 0;
    this.mass = 0;
    this.invMass = 0;
  }
  setOrient(radians) {
    this.orient = radians;
    this.shape.setOrient(radians);
  }
}
