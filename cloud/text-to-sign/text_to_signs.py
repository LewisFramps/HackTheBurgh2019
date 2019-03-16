from flask import jsonify

letter_image_map = {
    'A': 'A_test.jpg',
    'B': 'B_test.jpg',
    'C': 'C_test.jpg',
    'D': 'D_test.jpg',
    'E': 'E_test.jpg',
    'F': 'F_test.jpg',
    'G': 'G_test.jpg',
    'H': 'H_test.jpg',
    'I': 'I_test.jpg',
    'J': 'J_test.jpg',
    'K': 'K_test.jpg',
    'L': 'L_test.jpg',
    'M': 'M_test.jpg',
    'N': 'N_test.jpg',
    'O': 'O_test.jpg',
    'P': 'P_test.jpg',
    'Q': 'Q_test.jpg',
    'R': 'R_test.jpg',
    'S': 'S_test.jpg',
    'T': 'T_test.jpg',
    'U': 'U_test.jpg',
    'V': 'V_test.jpg',
    'W': 'W_test.jpg',
    'X': 'X_test.jpg',
    'Y': 'Y_test.jpg',
    'Z': 'Z_test.jpg',
    ' ': 'space_test.jpg'
}

def parse_letters(word):
    letters = list(word.upper())
    return letters

def letter_to_image(letter):
    return 'https://storage.googleapis.com/asl-sign-letters/asl_alphabet_test/' + letter_image_map[letter]

def letters_to_images(letters):
    response = []
    for letter in letters:
        response.append(letter_to_image(letter))
    return response

def text_to_signs(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    request_json = request.get_json()
    if request.args and 'word' in request.args:
        letters = parse_letters(request.args.get('word'))
        return jsonify(letters_to_images(letters))
    elif request_json and 'word' in request_json:
        letters = parse_letters(request_json['word'])
        return jsonify(letters_to_images(letters))
    else:
        return f'Hello World!'
    