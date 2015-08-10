       class Dog
        attr_reader :name 

        def initialize(name, breed)
          @name = name
          @breed = breed
        end

        def breed
          @breed
        end

        def new_name(name)
          @name = name
        end


        def age=(years)
          @age = years
        end
      end     

      fido = Dog.new("Fido", "Terrier")
      fido.new_name("Rex")
      fido.age=(0)

      p fido.name
      p fido.breed


