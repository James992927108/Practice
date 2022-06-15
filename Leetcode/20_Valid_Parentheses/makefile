
APP= longestCommonPrefix 
all: clean $(APP) run

$(APP):longestCommonPrefix.c
	gcc -g -Wall -o longestCommonPrefix longestCommonPrefix.c

clean: 
	$(RM) longestCommonPrefix

run: $(APP)
	./$(APP)
	