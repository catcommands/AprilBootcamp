# In this file we define the methods to help filter out candidates
# This way, we keep these methods separated from other potential parts of the program

def find(id)
  @candidates.detect(ifnone = nil) { |candidate| candidate[:id] ==  id }
end

#take single candidate, true/false on experience condition
def experienced?(candidate)
  candidate[:years_of_experience] >= 2
end

# select method returns subset of original array based on criteria
# checks true/false, returns subset of true
def qualified_candidates(candidates)
  candidates.select { |candidate| experienced?(candidate) && points?(candidate) && knowledge?(candidate) && applied?(candidate) && age?(candidate)}
end
# More methods will go below

def points?(candidate)
  candidate[:github_points] >= 100
end

def knowledge?(candidate)
  candidate[:languages].any? { |i| ["Ruby", "Python"].include? i }
end

def applied?(candidate)
  candidate[:date_applied].day < 15
end

def age?(candidate)
  candidate[:age] > 17
end