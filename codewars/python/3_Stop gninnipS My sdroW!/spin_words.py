def spin_words(sentence):
    # v1
    elements = sentence.split()
    for index,element in enumerate(elements):
        if len(element) >= 5:
            element = element[::-1]
        elements[index] = element
    sentence = ' '.join(elements)
    # v2
    sentence = ' '.join([x[::-1] if len(x) >= 5 else x for x in sentence.split(" ")])
    return sentence