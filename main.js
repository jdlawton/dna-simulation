// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, baseArray) => {
  return {
    specimenNum: number,
    dna: baseArray,
    mutate() {
      const baseToMutate = Math.floor(Math.random() * 15);
      console.log("Mutating Base #: " + baseToMutate);
      let newBase = '';
      do {
        newBase = returnRandBase();
        console.log("inside do while");
      }
      while (this.dna[baseToMutate] === newBase);
      console.log ("Original Base: " + this.dna[baseToMutate]);
      console.log ("New Base: " + newBase);
      this.dna[baseToMutate] = newBase;
    }, 
    compareDNA(pAequor2) {
      let numMatch = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor2.dna[i]){
          numMatch ++;
        }
      }
      const percentMatch = (numMatch / this.dna.length) * 100;
      console.log(`${this.specimenNum} and ${pAequor2.specimenNum} have ${percentMatch.toFixed(2)}% DNA in common.`)
    },
    willLikelySurvive() {
      let numMatch = 0;
      for (let i = 0; i < this.dna.length; i++){
        if (this.dna[i] === 'C' || this.dna[i] === 'G'){
          numMatch ++;
        }
      }
      const percentMatch = ( numMatch / this.dna.length) * 100;
      if (percentMatch >= 60) {
        return true;
      } else {
        return false;
      }
    },
  };
}

let viableSamples = [];
do {
  const sample = pAequorFactory(viableSamples.length + 1, mockUpStrand());
  if (sample.willLikelySurvive()){
    viableSamples.push(sample);
  }
}
while (viableSamples.length < 30);
console.log("Viable Samples: " + viableSamples.length);
console.log(viableSamples);







