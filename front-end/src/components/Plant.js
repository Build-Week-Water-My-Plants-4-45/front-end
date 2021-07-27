import PlantImg from './PlantImg';

export default function Plant(props) {
    // const { nickname, species, img, h2oFrequency, onChange } = props;
    const dummyData= {
        nickname: 'Rose',
        species: 'Red Rose',
        img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISFRYVFRUVGRIYGRoaGBgSHBIZHBgYGBgaGh4VGRocIS4lHCErHxgWJjomLDAxNTU1GiQ+QDs0TS80NTEBDAwMEA8QHBISGjQhJCs0MTcxMTQ0NDQ0NDE2NDQ0MTQ0MTQ/NDQ0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIHAf/EAEUQAAIBAgIGBgYJAQQLAAAAAAECAAMRBCEFEjFBUWEGEyJxgZEyQlKhscEUI2JygpKi0eEHM0NjsiQ0U1Rzg5OjwvDx/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAQEAAQUBAQEAAAAAAAAAARECIQMSMUFxUYEi/9oADAMBAAIRAxEAPwD7NERAREQEREBERAREQPyQtH6QWsGsCrKxVkbJlIJGfI2yMmzM6ddcNWXEL6VvrVA9OndULcypNMeKyW4laeJzpOGAIIKkAgjYQcwROkqkREBERAREQEREBERAREQEREBERAREQEREBERAThWp6ykBmUnYyWuDuIuCPAgjiDO8gaRw7uNamQKy5oTsJ3034q1rHhkRmAQHnC4pg3VVbCpYlGGS1VG0gHYw3r4gkbLGUOJP03Da1PWSsp1kDW1qVemSCjbr31kO4hja4Ml6C0muKpLUAs2x19lxtHwI5ESaLKZrplUSmlGo5CoKmo5YgAU6qMjEncFJV/8AliaWY3+qIvgwP8Qf5KkX4VadDsQXw4VvSpsyHuFmUeCso8JfTE/04xOsjrxWk/iyapP6BNvJzdjMIiJpSIlZoN2am+ttFfEr+EYioF/TqwLOc6jhQWYgKMyWIAHMk7JA0vpVMOFuC1Rzq06aelUbgOAzFychfulKMEcVXVapDiiyvWIvqLVyZMPTXZlk7Me0RqA5MVE0ayfsRKEREBERAREQEREBERAREQEREDwzgEA7Te3hnPcqNPkoiVh/c1Eds7DUN0qMe6nUqN+ES3gZXTOtgq/0xATQqaqYlBxAslcD2gAFPEBRwtXaNxow2OdQQaFdgVIItdxrqw5drV8eU2mKw61FZGF1YEHx398+TaUw70WNNr3QkKeFjew5Z3HfOXqWzKz1c8vr8yH9S1vhB/xF/wAjy66OaR+k4dKl7tbVb7y5E+O3xlb0/p62F7nB/Sw+c1bvOrv2z39OK1qir7VBvNagt7iZvNGY5MRT6xAQpZ17Qsbo7IfepnzfoU+riMOOPWL+hm+KibHoZVBpVkHqYit5VHNUH/ue6Z9PrZic35/WkiInVpwxFdaaM7GyqCzHgALmZ3BaZXD4L6RVFmd6rqgtdmqVajqg/CRnwBM/OmuOsgpA+l2m+6pyHiw/TMY7Pinpox1aVNAuexERQWc8zYsfAbhOfXeXIzvla4CvXqH6U1mxmIY08KrbKagHXqgbkVSe8k32zdaMwCYemtNbm2bMfSd2N2qMd7MxLE8TKHonQ61jiiuqur1WHX2KSnM97HaeIPKaua5n2vy/YiQNMYg06Lsps5Gql/8AaOQiDxdlE0qVSqhwGU3U7CNh5jiJ1nDDUFpoiL6KqqjuUAD3Cd4CIiAiIgIiICIiAiIgIieWAIsdhgeKtNXVlYXVgQQd4IsRK/QVZjTNNyTUosaTE7W1ANV/xKVbvJnTQ1RjTCOSalMmm5O0lMgx+8uq34xOdQiliVPq101Tw16eanxVmH4RJRaTG9M8Er/WKQSCEe1smsGF+BII8LTZTL6TpN1mMT1Wo0ay82RnVwB92nS/NM9zZjPU2Kb+nmNKVKuHY5Ea6d4yYeRX8s0/SynrYZ+Wqf1AfOYTCMaWJoVBsDqG+651GP5WJ8J9E06t8PUH2fgQZji7zYxzd5sfMdC1urr4djkBUH6uz85ouhVfVxddPbQNt3oQNn4z5TMYdL1U5En8oJ+UmaGxfV4+i18mfUPPXBUDzZZx46zr/U4r6xOdaqqKWY2UAknkJ0mZ6Y47UQUxtbtN90HIeJ+E9XXWTXW3JrI6YxprVGZt5yHAbh4C0iYem9Vlw6elUK654KDrap5ZBj90c5zqOBdjsUX7+XibCWXRpGUawJ+lYpmp0bbUTbVxHABRe3FhbfPPzNrjzvVb7QTq1EagtSBZafEoh1A546xUsDwYT1i6rPUSihItapUZbdlFYaqHm5BH3VblOGksdSwFABQAEULSpiwuFUAKOCgAX4DwE66EwzU6Qaob1n+sqk+2wFxyCgBRyWd/dNyO6xJAzOQEoMHWONqiqARhKLHqicuvq5qatvYUFgt9rG/qiccVVbSDmjTJXCKfrqguDU/wlPA7zw7xfR0qaooVQAAAAFFgAMgANwll0dYiJoIiICIiAiIgIiICIiAiIgUmknOGcVxfqWstcD1bZLWA5X1W+zb2RJWlqHW0iVPbWzoRn2lzFu/Z4ybUQMCCAQQQQdhB2gzO4fEHA1BQqH/RmP1Lm/Y/w3PDPI7vhm+Eq9wOIFWmrjYwv3HePA3HhM10vxZwtbDYixNMdZTrAb6T6pNuYKhvC2+Wejn6mvUoH0W+sp9x9JR438jOfS/D69C/ssCe4gr8SJOr/wAm+GFqqCCt76pK3G8A5MD3b5u8PjfpGCZz6XVuG+8qkHztfuInzPDMab6p9E3Av7h8fOa3ohigKlXDscqqllvs1lGqwHMgg9ymef0+suf1xly5/WapECp3B/fYfOQ+t1cRSb2atNvyup+UlA2Z77h8SP2lFpOqQWI2jMeE5xnm+H38m0+Yabx/XVGfcT2b7lGS+7PvJm06S4408MT6z2QfiFz+kNPm1V78+7fynb1ets5b9Xr6RsWxYhBs9JjwG7/53TZdFFSlTfHVzYBOqpD2aSn0UG8sw8SDxmUwGENV1pqRdm7TbuJY/ZUX8BO3SjTQqFaNH/V6Y1UHtWFjUPM525HmZzvfsm/f0nN9s1caLqPpTGa7f2NM61toCg9mnwzO077NwFtFpXGPian0WgbD+9cbFW9iOfC285bAZR6NLYTDJSpC+LxFmNtqq3ojkdXPldjwmv0JotcNT1Rm7Zu3tN+w2ATr6XNzz83zXTnal4LCpRRUQWRdnPmTvJOd5KiJ6GyIiAiIgIiICIiAiIgIiICIiAkLSWBTEU2psMiMjwO4iTZzqOFBJ2AEnachA+fDF1aLLQqH62i31TG51k9knePRtyuOE2T1VxGHZl9ZTltsw3d4Ilf0m0QMTTFSnbrUGsjDPWG0DnxH8yr6K6U1WCNktQ7D6rjK3ja3lOc8XKx8XKyuk6Nv/d/GQ/prKFqi/WUXVrDImxvl3gETQ9JsHqO67r3X7pzH7eEx1VyL8dh5gzzdTK4dRdaTdVq1reiXOrzXWax8rTNV+24X2mA8zaT6uJJRSTnZR5Age60h6HXXxVAE2HWozG17KjB2NvuqZPmpPL6J05x+tUFMHsouY+0cz7tX3zI1Kuot/WbId29vlO+OxDVqjMTmzFjyBJY+QlY1Q1HyGWwDkNglt93Vpb7utTPpRpU2AyZ1IJ36h2qO/Z3XG+Q9FIGcu4BpoQSDsP2fHPzMj4kOWVBtsqjwHw3zX9D9CCu4BF8PSzYn133D59wtMc83vv8AG8tuNX0U0a2eJrZ1anog+qh323E+4WE1ECJ75MjvJkx+yJjcWtEXa+ZCqq5s7tsVRvJ+RJsATI+kNL06TBAGqVm2UqQDMeZuQFHNiBPzA4Ny/XV7GrYhEX0aKnaqn1mO9vAWG1qrFCbC4sbZjbY8L757iJQiIgIiICIiAiIgIiICIiAiIgZ/C1/olb6O5tQqsTh3N7KzG7YYncdYsybBqnVHoi9P0o0X1b9YgslQ9q1+y/HlrfETXY3BpWRqdRQyMMwfiOBG4zJV8e+F1sNi9apQIstXa4X1S3tWtt2gjfMd/HlnqSxH0niRiaCOf7VCab8zq6ynxAJ77iYPHpquZfaRrmmtTUcOpAzQ3BKMHRxzuuw8WEpdIVFqIrr6LC45G9ivgQR4Tzd3zrz9VU1qllK87juznTQBBqs17alOofzr1fxqCQcU066HU3dxsACm3221h/kPlM/afC7csRZRd37IA4bT8B5md6OF1OyDdz6R/wDET3lTW394RY/ZBz1e/j3CfhfVRmO4e85X98RefDjgsO9WqFQXqVW1U5IPWPAWGsTwn2TQ+jkwtJKSbFGZ3sx2se8zMf080IUT6VUH1lUdgH1ae0HvbI91pbac6T0cLdQQ9YeopyW/tt6vdtPDfPR6fM5m125mTau69dKalmIVRtJymfOlK+MJTDDUpA2au49yLvPw32kPR+icRjWFbFllp7VpC63HMX7A/Ud5mtpU1QBVAVQLAKAABwAGybm38b81E0bounQBCglmzZ3N3c8Wbf3bJPifs1IpERKEREBERAREQEREBERAREQERED8lbprRa4lNU5MM1bgeB5Ge9JaUp0FLORlMfi+nLMbIthxMzbPszWU0rhHoMwIKkGzDj+4lVh1PbTLVN3W+5rdpRyIz715zR6QxzYrN7FrWB5cJncQuoSDOHXP8cOucqmxwtJ3RhLdZUb0E1bDcz9rV77Ak+InHHpddZd23953w1cJh0QbWLO3few9wWY55u5WZExq5ZrnfmZe9HNFjF1LPYYalZ6zHIFVvqoT9o6xPBVOy4mVw73IzUXO1yFUcyx2Dab8jLCri2qBcNQDGnfWItY1H31agOwCw1VPogC+dgu+efO1rmNhp7pi9ZuowesqHsh0HbqXyApD1V3Btp9WwsTddFuia0QtWuAa20LtVCd59pufx2zIaJqHAHrAFesdrML2vtC32d+0zb6F6X0q/ZYaje6dZlu11nN+a1ETyrAi4NxynqdGiIiAiIgIiICIiAiIgIiICIiAiIgJ4c2BO+xnufkD5R07r1FrKGJFMpdSdhz7Xjs8xMLiNOKpsg1jxOQ/mfatJaOo4pGo4hFenwNwQR6ykZqeYmA0r/TBxdsNXVlvcJiBYjkKig3y3EDv3zPtm+V1hKuka9Q/2hF9yEqPcfjO+Hrsos7s1zYZs7LzJ4ZGSsZ0WxtA3fDVDb1qYVx4alzbvtKfEsy6qMCr7dVgQcsr2JF9hm8lZs1ZNVKnbce4gyOXtlu2jlynOliaeoA19a7Hs2yBzAAy5nxkZ8SNlxs5icrx5Y9qU1e/aPor6I2fiN9/DwkdsVUDawdkO7VLpv2XuL984IobMtfPLWFxfhe9pIw9E1MkBc+zQDvbvAv4d03zzI1OcS8NpnErfWY1EPtG58G3bectcDpRahsDqv7JIv3i22c8B0Kx1Vr9Syr7WIbUHkbuPyma/QHQPC4dleu/X1VNwigrTU8TfN/Gw4rJeZXSWt50Rru1JA97lA2ffYHxFjNFKnQp1tdjyHx/iW00yREQEREBERAREQEREBERAREQEREBERAosQLOw5n35zxedtIC1Q8wD7rfKcIV+65E8VHuLMFI4MAfjDTg5gRq2DwzelhsO33qdM/KRH0bg/8AdMN/0qf7SY7SLUaQcepoJ6GHoL91KY+U9nGOMgQBwAAnCo84M8YqZ1zNtJM7UmkBGkyhLg1mg0tTvxYn4D5SykTRqatNByv55/OS4ZIiICIiAiIgIiICIiAiIgIiICIiAiIgVOll7SniLeR/mQpY6WXJTzt5j+JXCFfjTg87tOFSQRqhkSqZKqSHVMKjVDOBM6VDOUo7U5OwwkGlLbRaazqOLD4wlbOmlgBwAHlPcRCEREBERAREQEREBERAREQEREBERAREQIWk1uh5EH32+cqRLvGLdGH2T7s5SLA/GnCpJDSPUkaRKsh1ZMqyFVgRKk5TrUnMCB3oiX/R9L1F5XPu/mUdETTdG6faZuC28z/EqVooiIQiIgIiICIiAiIgIiICIiAiIgIiICIiB5ZbgjjM6s0kz9dLOw5n4wPBkepJBnCpI0h1ZDqybVkKrAh1J5UTpUnlRKJFETW9HEsjHiQPIfzMtRE2WhUtSHMk++3yhKsIiIQiIgIiICIiAiIgIiICIiAiIgIiICIiAlfjsIWOsM+I+YlhEDOOhE4VJpalFW2gH4+ci1NGIdhI8jIuszVkOpNPU0JfY/mv8yO3R0n1x5H94XWWcQgmpXowu+ofwqB8SZNw+gsOmeqWPFzf3bPdKaz2jMA9U9kdnex2D9zymypUwqhRsAsPCfqqALAAAbhPcMkREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP//Z',
        h2oFrequency: '30 mins'
    }
    return (
        <div class='plant-container'>
            <h2>{dummyData.nickname}</h2>
            <h3>{dummyData.species}</h3>

            <PlantImg img={dummyData.img} species={dummyData.species}/>

            <p>Be sure to water {dummyData.nickname} every: {dummyData.h2oFrequency} mins!</p>
        </div>
    )
}