import React from 'react';
import { SECTION_IDS } from '../../common/consts';
import './Hosts.scss';

export const Hosts: React.FC = () => {
  return (
    <section className="hosts-section" id={SECTION_IDS.hosts}>
      <h2>Meet Our Hosts</h2>
      <div className="host--wrapper">
        <div className="host">
          <img height={300} src="/images/hosts/kyle.jpg" alt="Kyle" />
          <div className="host--info">
            <p>
              "Hi! I'm Kyle (he/him) and one of the co-founders of TC3! I reside in St. Paul and
              have been playing board games my whole life, some of my earliest memories were playing
              Sorry! or Sequence with my family. My all time favorite game is Cosmic Encounter, but
              I love everything from a trick-taking game to a crunchy Euro (A Feast for Odin
              anyone?) When I am not board gaming I am in search of the best food the Twin Cities
              has to offer, following the Vikings, playing darts, or watching Formula 1."
            </p>
            <h4>Kyle</h4>
          </div>
        </div>
        <div className="host">
          <img height={300} src="/images/hosts/andrew.jpg" alt="Andrew" />
          <div className="host--info">
            <p>
              "Hello there! My name is Andrew (He/Him) and you will most often find me at our weekly
              Thursday meet ups. I discovered my love of board games during the pandemic by playing
              games such as Spirit Island, Horrified, and Harry Potter Hogwarts battle with my
              spouse. I'm a big fan of co-operative / easy / breezy games and I'm always down for a
              good time. Outside of board game I am a huge fan of walking, warm beverages, and
              traveling."
            </p>
            <h4>Andrew</h4>
          </div>
        </div>
        <div className="host">
          <img height={300} src="/images/hosts/molly.png" alt="Molly" />
          <div className="host--info">
            <p>
              "Hi, I'm Molly (she/her), and I'm one of TC3's hosts! I live in the south metro with
              my kiddo, husband, and dog. Just some of my favorite games include Viticulture,
              Castles of Burgundy, and Obsession. I've also recently discovered a love for trick
              takers. When I'm not board gaming, I also enjoy TTRPGs (D&D, VtM, Delta Green),
              "grandma" hobbies like knitting/crochet/cross stitch, and caring for my ever growing
              collection of house plants. I can't wait to see everyone at the table!"
            </p>
            <h4>Molly</h4>
          </div>
        </div>
        <div className="host">
          <img height={300} src="/images/hosts/jason.png" alt="Jason" />
          <div className="host--info">
            <p>
              "Hey all, Jason here. I'm based in the south suburbs. I'm primarily at the Thursday
              night meetups, but venture out to others from time to time. My favorite types of games
              are Ameritrash and conflict driven games. My current top plays are Arcs, DC Forever,
              and Pagan, but I'm usually up for anything with good conflict. Outside of gaming, I'm
              an avid hiker, biker, and general lover of outdoors."
            </p>
            <h4>Jason</h4>
          </div>
        </div>
        <div className="host">
          <img height={300} src="/images/hosts/jessica.png" alt="Jessica" />
          <div className="host--info">
            <p>
              "Hey, my name is Jessica, and I'm the host for our monthly northern burb meetups! Some
              of my favorite games include euros (Castles of Burgundy, Brass Birmingham, Power Grid)
              and deck builders (Clank, Dominion). I dabble in most games through with having two
              young kiddos and an ameritrash/miniature-loving spouse. With a collection of 100+
              games, I enjoy getting everyone together and helping those find their place in the
              hobby."
            </p>
            <h4>Jessica</h4>
          </div>
        </div>
        <div className="host">
          <img height={300} src="/images/hosts/john.png" alt="John" />
          <div className="host--info">
            <p className="small">
              "Hello! I'm John C. (he/him). I am a host at the once-a-month weekend meetup for
              trick-taking card games, along with the monthly weekend meetup dedicated to general
              board gaming. I also try to make it to the Thursday meetup whenever my schedule
              allows. Recently, my favorite game has been Star Wars: Unlimited, enjoying the quick
              tactical play and creativity of deck construction. A couple other favorites are The
              Bottle Imp (and most trick-taking games) and Heat: Pedal to the Metal. I'm also happy
              playing most euros, preferring those that fit into a 1-2 hour play time. When I'm not
              shuffling cards, I enjoy watching Timberwolves and Vikings games, getting lost in a
              good book, or catching live music at a concert."
            </p>
            <h4>John</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
