class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let num = 0;
    let current = this;
    while (this.creator) {
      current = this.creator;
      num++;
    }
    return num;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let theResult = vampire.numberOfVampiresFromOriginal > this.numberOfVampiresFromOriginal;
    return theResult;
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  // vampireWithName(name) {
  //   let vampire = null;
  //   if (this.name === name) return this;
  //   for (const offspring of this.offspring) {
  //     if (vampire) break;
  //     vampire = offspring.vampireWithName(name);
  //   }
  //   return vampire;
  // }

  // // Returns the total number of vampires that exist
  // get totalDescendents() {
  //     let total = 0;
  //     for (const offspring of this.offsprings) {
  //       offspring.totalDescendents;
  //       total++
  //     }
  //     return total;
  //   }

  // // Returns an array of all the vampires that were converted after 1980
  // get allMillennialVampires() {
  //   let millenialsvamp = [];

  //   if (this.yearConverted > 1980) millenialsvamp.push(this);

  //   for (const offspring of this.offsprings) {
  //     const millOffspring = offspring.allMillennialVampires;
  //     millenialsvamp.concat(millOffspring);
  //   }
  // }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
    closeCommonAncestor(vampire) {
    }
  }
}
module.exports = Vampire;